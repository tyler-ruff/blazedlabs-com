'use client'

import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile, validatePassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from "firebase/firestore";

import ErrorMessage from '../error/message';
import { generateRandomHex, getInitials } from '@/lib/functions';

export default function RegisterForm(){
    const router = useRouter();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    const [subscribe, setSubscribe] = useState<boolean>(false);

    const [error, setError] = useState<boolean | null>(null);
    const [output, setOutput] = useState<string | null>(null);

    const handleRegister = async () => {
        try{
            //Validate password
            const checkPassword = await validatePassword(auth, password);
            //Validate form
            if(password !== passwordRepeat || !email || !firstName || !lastName ||
                email.length >= 255 || password.length >= 255 || firstName.length >= 255 || 
                lastName.length >= 255 || !checkPassword.isValid){
                setError(true);
                setOutput("Please correct the error(s) below.");
            } else {
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setError(false);
                    // Signed up 
                    const user = userCredential.user;
                    // Update displayName on profile
                    const fullName = `${firstName} ${lastName}`;
                    updateProfile(user, {
                        displayName: fullName
                      }).then(() => {
                        // Update profile document
                        const docRef = doc(db, "profiles", user.uid);
                        /*
                        updateDoc(docRef, {
                            avatar: `https://blazedlabs.com/api/og/avatar?title=${getInitials(fullName)}`,
                            displayName: fullName,
                        });
                        */
                        setDoc(docRef, {
                            uid: user.uid,
                            avatar: `https://blazedlabs.com/api/og/avatar?title=${getInitials(fullName)}`,
                            displayName: fullName,
                            theme: generateRandomHex(),
                            createdAt: user.metadata.creationTime,
                            lastOnline: user.metadata.lastSignInTime
                        }).then(() => {
                            router.push('/');
                        });
                      }).catch((error) => {
                        // An error occurred
                      });

                })
                .catch((error) => {
                    //const errorCode = error.code;
                    //const errorMessage = error.message;
                    setError(true);
                    setOutput(`(${error.code}): ${error.message}`);
                });
            }
        } catch(error){
            setError(true);
            setOutput(`Action failed due to an unknown error. Please try again.`);
        }
    };

    return (
        <form action={handleRegister} className="mt-8 grid grid-cols-6 gap-6">
            {
                error === true && <ErrorMessage message={output} />
            }
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    First Name
                </label>
                <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John" 
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm"
                />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Last Name
                </label>
                <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith" 
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm" />
            </div>
            <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Email
                </label>
                <input
                    type="email"
                    id="Email"
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm" />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Password
                </label>
                <input
                    type="password"
                    id="Password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm"
                />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Password Confirmation
                </label>
                <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    value={passwordRepeat} 
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm" />
            </div>
            <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)}
                        className="h-5 w-5 rounded-md border-gray-200 bg-white dark:bg-gray-700 shadow-sm"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                        I want to receive emails about events, product updates and
                        company announcements.
                    </span>
                </label>
            </div>
            <div className="col-span-6">
                <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <Link href="/terms" target="_blank" className="text-gray-700 dark:text-gray-100 hover:underline px-1">
                        terms and conditions
                    </Link>
                    and
                    <Link href="/privacy" target="_blank" className="text-gray-700 dark:text-gray-100 hover:underline px-1">
                        privacy policy
                    </Link>
                </p>
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type="submit" className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account? &nbsp;
                    <Link href="/login" className="text-gray-700 dark:text-gray-100 underline">
                        Log in
                    </Link>.
                </p>
            </div>
        </form>
    );
}