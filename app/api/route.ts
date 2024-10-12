import { NextResponse } from 'next/server';
import Package from '@/package.json'
 
export async function GET(request: Request) {

  return NextResponse.json(
    { 
        message: `Blazed Labs API v(${Package.version})`
    },
    {
        status: 200
    }
  );

}