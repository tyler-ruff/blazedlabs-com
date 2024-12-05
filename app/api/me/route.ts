import { NextResponse } from 'next/server';

import { auth } from '@/lib/firebase';

//import { useAuthContext } from "@/context/AuthContext";

export async function GET(request: Request) {
    //const { user } = useAuthContext() as { user: any };
    return NextResponse.json(
        { 
            loggedIn: auth.currentUser
        },
        {
            status: 200
        }
    );
}