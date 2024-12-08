'use client'

import { z } from 'zod';

import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile, validatePassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from "firebase/firestore";

import ErrorMessage from '../error/message';
import { generateRandomHex, getInitials } from '@/lib/functions';

export default function RegisterForm(){
    const router = useRouter();

    /*
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    */
    const [subscribe, setSubscribe] = useState<boolean>(false);

    const [error, setError] = useState<boolean | null>(null);
    const [output, setOutput] = useState<string | null>(null);

    const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

    const registerFormSchema = z.object({
        firstName: z.string()
            .min(1, "First name is smaller than minimum length.")
            .max(255, "First name exceeds acceptable length."),
        lastName: z.string()
            .min(1, "Last name is smaller than minimum length.")
            .max(255, "Last name exceeds acceptable length."),
        email: z.string()
            .min(3, "Email is too short.")
            .max(255, "Email may not be longer than 255 characters.")
            .email("This is not a valid email."),
        password: z.string()
            .min(6, "Password must be at least 6 characters.")
            .max(255, "Password may not be longer than 255 characters."),
        passwordRepeat: z.string().min(6).max(255)
    }).superRefine(({ passwordRepeat, password }, ctx) => {
        if (passwordRepeat !== password) {
          ctx.addIssue({
            code: "custom",
            message: "The passwords do not match",
            path: ['passwordRepeat']
          });
        }
    });
    type FormData = z.infer<typeof registerFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;
    
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            registerFormSchema.parse(data);
            return field ? { [field]: [] } : {};
        } catch (error){
            if(error instanceof z.ZodError){
                const newErrors = error.flatten().fieldErrors;
                return field ? { [field]: newErrors[field] || [] } : newErrors;
            }
            return {};
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
          // Form is valid, proceed with submission
          //console.log("Form submitted:", formData);
          handleRegister(formData);
        }
    };

    const handleChange = async(
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        // Validate form on each change
        //console.log(formData);
        const newErrors = validateForm(updatedFormData);
        setErrors(newErrors);
    };

    const handleRegister = async (data: FormData) => {
        try{
            //Validate password
            const checkPassword = await validatePassword(auth, data.password);
            //Validate form
            if(data.password !== data.passwordRepeat || !data.email || !data.firstName || !data.lastName ||
                data.email.length >= 255 || data.password.length >= 255 || data.firstName.length >= 255 || 
                data.lastName.length >= 255 || !checkPassword.isValid){
                setError(true);
                setOutput("Please correct the error(s) below.");
            } else {
                createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    setError(false);
                    // Signed up 
                    const user = userCredential.user;
                    // Update displayName on profile
                    const fullName = `${data.firstName} ${data.lastName}`;
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
        <form onSubmit={handleSubmit} method="post" className="mt-8 grid grid-cols-6 gap-6">
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
                    name="firstName"
                    value={formData.firstName} 
                    onChange={handleChange}
                    placeholder="John"
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm ${errors.firstName && errors.firstName.length > 0 && errorClasses}`}
                />
                {
                    errors.firstName && errors.firstName.length > 0 && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.firstName[0]}</span></p>
                    )
                }
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
                    name="lastName"
                    value={formData.lastName} 
                    onChange={handleChange} 
                    placeholder="Smith"
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm ${errors.lastName && errors.lastName.length > 0 && errorClasses}`} />
                {
                    errors.lastName && errors.lastName.length > 0 && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.lastName[0]}</span></p>
                    )
                }
            </div>
            <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Email
                </label>
                <input
                    type="email"
                    id="Email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm ${errors.email && errors.email.length > 0 && errorClasses}`}
                />
                {errors.email && errors.email.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email[0]}</span></p>
                )}
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
                    value={formData.password} 
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm  ${errors.password && errors.password.length > 0 && errorClasses}`}
                />
                {errors.password && errors.password.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password[0]}</span></p>
                )}
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
                    name="passwordRepeat"
                    value={formData.passwordRepeat} 
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100 shadow-sm ${errors.passwordRepeat && errors.passwordRepeat.length > 0 && errorClasses}`} 
                />
                {errors.passwordRepeat && errors.passwordRepeat.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.passwordRepeat[0]}</span></p>
                )}
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