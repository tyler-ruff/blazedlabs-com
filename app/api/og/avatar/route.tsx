import { ImageResponse } from '@vercel/og';

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        //?title=<identity>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
        ? searchParams.get('title')?.slice(0, 100)
        : 'usr';
        return new ImageResponse(
            (
              <div
                style={{
                  backgroundColor: 'black',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  flexWrap: 'nowrap',
                }}
              >
                <div
                  style={{
                    fontSize: 60,
                    fontStyle: 'normal',
                    color: 'white',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {title}
                </div>
              </div>
            ),
            {
              width: 80,
              height: 80,
            },
          );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
          status: 500,
        });
      }
}