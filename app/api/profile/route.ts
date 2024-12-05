import { NextResponse } from 'next/server';

//import { auth } from '@/lib/firebase';

import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '@/config/firebase';

import { getDatabase, ref, get } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        const hasID = searchParams.has('id');
        const uid = hasID
        ? searchParams.get('id')?.slice(0, 100)
        : null;

        if(uid === null){
            return NextResponse.json(
                { 
                    message: `The requested user 
                              UID is invalid.`
                },
                {
                    status: 412
                }
            );
        }

        const settingsRef = ref(db, `settings/${uid}`);
        const snapshot = await get(settingsRef);

        if(!snapshot.exists()){
            return NextResponse.json(
                { 
                    message: `The requested user 
                             (UID: ${uid}) cannot 
                             be found or is invalid.`
                },
                {
                    status: 404
                }
            );
        }

        return NextResponse.json(
            snapshot.val(),
            {
                status: 200
            }
        );
    } catch (e: any){
        return NextResponse.json(
            { 
                message: e.message
            },
            {
                status: e.status || 500
            }
        );
    }
}