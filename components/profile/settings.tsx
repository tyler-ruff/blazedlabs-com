'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuthContext } from "@/context/AuthContext";
import { getUserProfile } from '@/lib/hooks/users';

import "./settings.css";

export default function Settings(){
    const router = useRouter();

    const { user } = useAuthContext() as { user: any };
    const [profile, setProfileData] = useState<any | null>(null);
    
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    useEffect(() => {
        if(!user){
            router.push('/login');
        }
        const fetchDocument = async () => {
          try{
            getUserProfile(user.uid).then((data) => {
              if(data !== null){
                setProfileData(data);
                const splitFullName = data.displayName.split(' ');
                if(splitFullName.length >= 2){
                    setFirstName(splitFullName[0]);
                    setLastName(splitFullName[1]);
                }
              }
              //setLoading(false);
            });
          } catch(e: any){
            //setError(true);
            console.log(e.message);
          }
        }
        fetchDocument();
    }, []);
    return profile !== null && (
        <section className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900">
            <form noValidate={false} action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">
                            Profile Inormation
                        </p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" readOnly={true} value={user.email} disabled={true} type="email" placeholder="Email" className="w-full rounded-md text-gray-900 border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src={profile.avatar} alt="User Avatar" className="w-10 h-10 bg-gray-50 dark:bg-gray-8000 rounded-full bg-gray-300" />
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Website</label>
                            <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Bio</label>
                            <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">State / Province</label>
                            <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}