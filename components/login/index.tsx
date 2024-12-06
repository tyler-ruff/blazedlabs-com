'use client'

import { useEffect, useState } from 'react';

import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { useRouter } from 'next/navigation';

import Loading from '@/components/loading';
import LoginForm from "./form";

export default function Login(){
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
            if ( user ) {
              // User is signed in
              router.push('/');
            } else {
                setLoading(false);
            }
          } );
          return () => unsubscribe();
    }, []);

    if(loading){
        return (
            <Loading />
        )
    }

    return (
        <div>
            <LoginForm />
        </div>
    );
}