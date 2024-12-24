'use client'

import { z } from 'zod';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from "next/navigation";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

import { auth, provider } from '@/lib/firebase';
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPasswordForm(){
    const router = useRouter();

    const forgotPasswordFormSchema = z.object({
        email: z.string()
            .min(3, "Please enter your email.")
            .max(255, "Email exceeds acceptable length")
            .email("This is not a valid email."),
    });

    type FormData = z.infer<typeof forgotPasswordFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;

    const [formData, setFormData] = useState<FormData>({
        email: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            forgotPasswordFormSchema.parse(data);
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
          //handleLogin(formData);
          
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

    return (
        <form onSubmit={handleSubmit} method="post" className="select-none py-5">
            <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Forgot Your Password
                </h3>
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
              <div className="w-full">
                <Button className="dark:bg-gray-800" type="submit">Reset Password</Button>
              </div>
            </div>
        </form>
    )
}