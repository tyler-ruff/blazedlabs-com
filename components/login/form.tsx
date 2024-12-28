'use client'

import { z } from 'zod';

import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

import { auth, provider } from '@/lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup, getRedirectResult, signInWithRedirect } from 'firebase/auth';

export default function LoginForm(){
    const router = useRouter();
    //const [email, setEmail] = useState<string>('');
    //const [password, setPassword] = useState<string>('');
    //const [remember, setRemember] = useState<boolean>(false);
    
    const loginFormSchema = z.object({
        email: z.string()
            .min(3, "Please enter your email.")
            .max(255, "Email may not be longer than 255 characters.")
            .email("This is not a valid email."),
        password: z.string()
            .min(6, "Please enter your password.")
            .max(255, "Password may not be longer than 255 characters.")
    });

    type FormData = z.infer<typeof loginFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            loginFormSchema.parse(data);
            return field ? { [field]: [] } : {};
        } catch (error){
            if(error instanceof z.ZodError){
                const newErrors = error.flatten().fieldErrors;
                return field ? { [field]: newErrors[field] || [] } : newErrors;
            }
            return {};
        }
    }

    const handleGoogleLogin = (e: any) => {
        signInWithPopup(auth, provider).then(async (userCred) => {
            if (!userCred) {
                return;
            }
            const token = await userCred.user.getIdToken();
            await fetch("/api/login", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${token}`,
                }
            });
        }).finally(() => {
            router.push("/");
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
          // Form is valid, proceed with submission
          //console.log("Form submitted:", formData);
          handleLogin(formData);
          
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

    const handleLogin = (data: FormData) => {
        try {
            signInWithEmailAndPassword(auth, data.email, data.password).then(async (userCred) => {
                if (!userCred) {
                    return;
                }
                const token = await userCred.user.getIdToken();
                await fetch("/api/login", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${token}`,
                    }
                }).then(() => {
                    router.push('/');
                });
            });
            //console.log(`email: ${email}`)
            // Redirect or perform actions after successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="post" className="select-none">
          <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
              </h3>
              <div className="my-6 space-y-4">
                  <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-600 focus:ri hover:bg-gray-800 hover:text-white active:ring ring-red-400 dark:ring-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current dark:text-white">
                          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                      </svg>
                      <p>Login with Google</p>
                  </button>
              </div>
              <div className="flex items-center w-full my-4">
                  <hr className="w-full text-gray-600"/>
                  <p className="px-3 text-gray-600">OR</p>
                  <hr className="w-full text-gray-600"/>
              </div>
              <div>
              <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput 
                id="email" 
                value={formData.email}
                name="email"
                onChange={handleChange}
                placeholder="name@example.com"
                color={
                    (errors.email && errors.email.length > 0) ?
                    "failure" : "default"
                }
                helperText={
                    errors.email && errors.email.length > 0 &&
                    errors.email[0]
                }
              />
                {errors.email && errors.email.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500 sr-only"><span className="font-medium">{errors.email[0]}</span></p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput 
                    id="password" 
                    type="password"
                    name="password"
                    value={formData.password} 
                    onChange={handleChange}
                    color={
                        (errors.password && errors.password.length > 0) ?
                        "failure" : "default"
                    }
                    helperText={
                        errors.password && errors.password.length > 0 &&
                        errors.password[0]
                    }
                />
                {errors.password && errors.password.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500 sr-only"><span className="font-medium">{errors.password[0]}</span></p>
                )}
              </div>
              <div className="flex justify-between">
              <div className="flex items-center gap-2">
                {/*
                  <Checkbox 
                    id="remember" 
                    name="remember" 
                    checked={formData.remember} 
                    onChange={handleChange}
                   />
                  <Label htmlFor="remember">Remember me</Label>
                */}
              </div>
              <Link href="/forgot" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
              </Link>
              </div>
              <div className="w-full">
                <Button className="dark:bg-gray-800" type="submit">Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link href="/register" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
              </Link>
              </div>
          </div>
      </form>
    );
}