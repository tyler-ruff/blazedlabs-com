'use client'

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";

import { useAuthContext } from "@/context/AuthContext";
import { db, isAuthenticated, storage } from '@/lib/firebase';
import { getFileExtension } from '@/lib/functions';

import LoadingPage from '../loading';

import "./settings.css";

export default function Settings(){
    const { user, profile } = useAuthContext() as { user: any, profile: any };
    
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const [uploading, setUploading] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const isLoggedIn = await isAuthenticated();
            if (!isLoggedIn) {
                router.push('/login');
            }
            };
            checkAuth();
    }, []);
    const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

    const settingsFormSchema = z.object({
        displayName: z.string()
            .min(1, "Display name is smaller than minimum length.")
            .max(255, "Display name exceeds acceptable length (255 characters)."),
        bio: z.string()
            .max(255, "Bio exceeds acceptable length.")
    });

    type FormData = z.infer<typeof settingsFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;
    
    const [formData, setFormData] = useState<FormData>({
        displayName: profile.displayName,
        bio: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            settingsFormSchema.parse(data);
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
          if(imagePreview !== null){
            handleUpload();
          }
          handleUpdate(formData);
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

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setImage(file);
          const previewUrl = URL.createObjectURL(file);
          setImagePreview(previewUrl);
        }
    };

    const handleUpload = () => {
        const userProfileLoc = `profile_pictures/${user.uid}`;
        if (image) {
          setUploading(true);
          // First, check existing profile pic renders & delete existing
          const listRef = ref(storage, userProfileLoc);
          listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                deleteObject(itemRef);
            });
          });
          // Prepare new file upload
          const uniqueName = uuidv4();
          const fileExt = getFileExtension(image.name);
          const storageRef = ref(storage, `${userProfileLoc}/${uniqueName}.${fileExt}`);
          const uploadTask = uploadBytes(storageRef, image);

          uploadTask.then(() => {
            // Get the download URL after the upload is complete
            getDownloadURL(storageRef)
              .then((url) => {
                //console.log(url);
                //onUploadComplete(url); // Pass the image URL back to the parent
                const docRef = doc(db, "profiles", user.uid);
                setDoc(docRef, { avatar: uniqueName }, { merge: true });
                setUploading(false);
                //setImage(null);
                //setImagePreview(null); // Reset preview
              })
              .catch((error) => {
                console.error('Error getting download URL:', error);
                setUploading(false);
              });
          }).catch((error) => {
            console.error('Upload error:', error);
            setUploading(false);
          });

        }
    };

    const handleUpdate = async (data: FormData) => {
        //TODO: Add update profile logic
        updateProfile(user, {
            displayName: data.displayName
            }).then(() => {
            // Update profile document
                const docRef = doc(db, "profiles", user.uid);

                setDoc(docRef, {
                    displayName: data.displayName
                }, { merge: true }).then(() => {
                    //router.push('/profile/settings');
                    router.refresh();
                });
            }).catch((error) => {
            // An error occurred
        });
    };

    return (profile !== null) ? (
        <section className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900">
            <form onSubmit={handleSubmit} method="post" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">
                            Profile Inormation
                        </p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="displayname" className="text-sm">First name</label>
                            <input 
                                id="displayname"
                                name="displayName"
                                type="text" 
                                placeholder="John Smith" 
                                value={formData.displayName} 
                                onChange={handleChange} 
                                className={`w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300 ${errors.displayName && errors.displayName.length > 0 && errorClasses}`} />
                            {
                                errors.displayName && errors.displayName.length > 0 && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.displayName[0]}</span></p>
                                )
                            }
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" readOnly={true} value={user.email} disabled={true} type="email" placeholder="Email" className="w-full rounded-md text-gray-900 border-gray-300 bg-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="avatar_upload" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <Image 
                                    src={imagePreview ? imagePreview : profile.avatar} 
                                    alt="User Avatar"
                                    width={58}
                                    height={58}
                                    className="w-10 h-10 bg-gray-50 dark:bg-gray-8000 rounded-full bg-gray-300" 
                                />
                                <input 
                                    onChange={handleFileChange} 
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                    id="avatar_upload" 
                                    type="file" 
                                    accept="image/png, image/jpeg"
                                />
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
                <div className="max-w-md relative mx-auto">
                    <input type="submit" value="Update Profile" className="px-8 py-3 font-semibold rounded bg-gray-800 hover:bg-gray-900 active:bg-gray-700 text-gray-100" />
                </div>
            </form>
        </section>
    ) : (
        <LoadingPage />
    )
}