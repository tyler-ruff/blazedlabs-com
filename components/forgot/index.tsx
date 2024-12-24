'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import LoadingPage from '@/components/loading';
import ForgotPasswordForm from './form';

export default function ForgotPassword(){
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
            if ( user ) {
              // User is signed in
              router.push('/profile');
            } else {
                setLoading(false);
            }
          } );
          return () => unsubscribe();
    }, []);

    if(loading){
        return (
            <LoadingPage />
        );
    }

    return (
        <div className="mx-5">
            <ForgotPasswordForm />
        </div>
    );
}