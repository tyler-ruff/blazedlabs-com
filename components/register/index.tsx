'use client'
import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { auth, provider } from '@/lib/firebase';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

import { useRouter } from 'next/navigation';

import Loading from '@/components/loading';
import RegisterForm from './form';

export default function Register(){
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    const pageHeader = 'Welcome to Blazed';
    const pageSubheader = 'Join Blazed by creating a Blazed Labs account today.';

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

    const JoinWithGoogle = () => {
        return (
            <div className="my-6 space-y-4">
                <button onClick={() => signInWithPopup(auth, provider)} aria-label="Join with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-600 focus:ri hover:bg-gray-900 hover:text-white active:ring ring-red-400 dark:ring-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current dark:text-white">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Join with Google</p>
                </button>
            </div>
        )
    };

    const OrDivider = () => {
        return (
            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-600"/>
                <p className="px-3 text-gray-600">OR</p>
                <hr className="w-full text-gray-600"/>
            </div>
        );
    };

    const DesktopPageHeader = () => {
        return (
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 select-none">
                <Image
                    alt="Beaker Desktop"
                    src="/images/wallpaper-beaker.png"
                    width={1200}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <div className="hidden lg:relative lg:block lg:p-12">
                    <Link title="Return Home" className="block text-white" href="/">
                        <span className="sr-only">Home</span>
                        <Image 
                            src="/images/beaker-white.png" 
                            alt="Beaker Mobile" 
                            width={50} 
                            height={50} 
                        />
                    </Link>
                    <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        {pageHeader}
                    </h2>
                    <p className="mt-4 leading-relaxed text-white/90">
                        {pageSubheader}
                    </p>
                </div>
            </section>
        );
    }

    const MobilePageHeader = () => {
        return (
            <div className="relative -mt-16 block lg:hidden">
                <Link className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white border shadow-md text-blue-600 sm:h-20 sm:w-20" href="/" title="Return Home">
                    <span className="sr-only">Home</span>
                    <Image src="/images/beaker-cobalt.png" alt="Beaker" width={50} height={50} />
                </Link>
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    {pageHeader}
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                    {pageSubheader}
                </p>
            </div>
        );
    }

    if(loading){
        return (
            <Loading />
        )
    }

    return (
        <div className="bg-white dark:bg-gray-800 select-none">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <DesktopPageHeader />
                <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <MobilePageHeader />
                        <JoinWithGoogle />
                        <OrDivider />
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}