import { getUserAvatar } from '@/lib/hooks/users';
import { ImageResponse } from '@vercel/og';
import { redirect } from 'next/dist/server/api-utils';

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        //?uid=<USER ID>&type=<FILE TYPE>&size=<SIZE>
        const hasUID = searchParams.has('uid');
        const hasType = searchParams.has('type');
        const hasSize = searchParams.has('size');
        const hasMedia = searchParams.has('media');

        const uid = hasUID
        ? searchParams.get('uid')?.slice(0, 200)
        : "";
        const type = hasType
        ? searchParams.get('type')?.slice(0, 10)
        : "png";
        const size = hasSize
        ? searchParams.get('size')?.slice(0, 4)
        : "50";
        const media = hasMedia
        ? searchParams.get('media')?.slice(0,25)
        : "image";

        let imageDimensions: {
            width: number, 
            height: number
        } = {
            height: 50,
            width: 50
        };

        switch(size){
            case "32":
                imageDimensions = {
                    width: 32,
                    height: 32
                };
                break;
            case "98":
                imageDimensions = {
                    width: 98,
                    height: 98
                };
                break;
            case "50":
            default:
                imageDimensions = {
                    width: 50,
                    height: 50
                };
                break;
        }
        
        if(uid !== undefined){
            const avatar = await getUserAvatar(uid, imageDimensions, type);
            switch(media){
                case "text":
                case "url":
                    return new Response(avatar, {
                        status: 200
                    });
                case "image":
                default:
                    return new ImageResponse(
                        (
                            <div style={{
                                backgroundColor: 'black',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                              }}>
                                <img 
                                    src={avatar} 
                                    alt="User avatar" 
                                    data-uid={uid}
                                    width={imageDimensions.width}
                                    height={imageDimensions.height}
                                />
                            </div>
                        ),
                        {
                            width: imageDimensions.width,
                            height: imageDimensions.height
                        }
                    )
            }
        } else {
            throw new Error("UID must be set");
        }
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
          status: 500,
        });
    }
}