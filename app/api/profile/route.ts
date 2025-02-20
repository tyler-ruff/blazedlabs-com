import { NextResponse } from 'next/server';

import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '@/config/firebase';

import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        const hasID = searchParams.has('uid');
        const uid = hasID
        ? searchParams.get('uid')?.slice(0, 100)
        : null;

        if(uid === null || uid === undefined){
            throw new URIError("The user id (UID) is invalid.");
        }

        const userDoc = doc(db, "profiles", uid);
        const userSnapshot = await getDoc(userDoc);

        const userProfile = userSnapshot.exists() ? userSnapshot.data() : null;

        // 404 Error
        if(userProfile === null){
            return NextResponse.json(
                { 
                    message: `The requested user (UID: ${uid}) cannot be found or the user has been deleted.`
                },
                {
                    status: 404
                }
            );
        }
        
        // Get avatar URL
        let avatarURL = "";
        const size: { width: number, height: number } = {
            width: 98,
            height: 98
        };
        const fileType = "png";
        const avatarRef = ref(storage, `profile_pictures/${uid}/${userProfile.avatar}_${size.width}x${size.height}.${fileType}`);
        try{
            avatarURL = await getDownloadURL(avatarRef);
        } catch(err){
            avatarURL = "/api/og/avatar/default";
        }
        
        return NextResponse.json(
            { ... userProfile, avatar: avatarURL },
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