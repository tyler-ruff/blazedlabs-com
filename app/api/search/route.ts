import { NextResponse } from 'next/server';
import blogSearchIndex from '@/lib/algolia';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const hasQuery = searchParams.has('query');

  if(hasQuery){
    try{
        const searchQuery = searchParams.get('query')?.slice(0, 255)
        const { hits } = await blogSearchIndex.search(searchQuery || "");
        return NextResponse.json(
            {
                results: hits
            },
            {
                status: 200
            }
        );
    } catch(error){
        console.error(error);
        return NextResponse.json(
            { 
                message: 'An unknown error has occured. Please try again.' 
            },
            {
                status: 503
            }
        );
    }
  } 

  return NextResponse.json(
    { 
        message: 'Bad Request: No search term entered.' 
    },
    {
        status: 400
    }
  );

}