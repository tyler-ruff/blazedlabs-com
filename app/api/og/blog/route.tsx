import { ImageResponse } from '@vercel/og';

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        //?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
        ? searchParams.get('title')?.slice(0, 100)
        : 'Unnamed blog post';
        return new ImageResponse(
            (
              <div
                style={{
                  backgroundColor: 'black',
                  backgroundSize: '150px 150px',
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    justifyItems: 'center',
                  }}
                >
                  <img
                    alt="Blazed"
                    height={200}
                    src="https://blazed.sirv.com/logo/Beaker-White.png?w=232&h=200"
                    style={{ margin: '0 30px' }}
                    width={232}
                  />
                </div>
                <div
                  style={{
                    fontSize: 60,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    color: 'white',
                    marginTop: 30,
                    padding: '0 120px',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {title}
                </div>
              </div>
            ),
            {
              width: 1200,
              height: 630,
            },
          );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
          status: 500,
        });
      }
}