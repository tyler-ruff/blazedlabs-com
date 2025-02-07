"use client"

import { sendContactEmail } from "./submit";

import "./form.css";

export default function ContactForm(){
    return (
        <form action={sendContactEmail} className="mt-6">
            <div className="flex-1">
                <label htmlFor="form-name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                <input required id="form-name" type="text" placeholder="John Doe" name="name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 dark:focus:ring-gray-100 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="flex-1 mt-6">
                <label htmlFor="form-email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input required id="form-email" type="email" name="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 dark:focus:ring-gray-100 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full mt-6">
                <label htmlFor="form-message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea required id="form-message" name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 dark:focus:ring-gray-100 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
            </div>
            <input type="submit" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 dark:bg-gray-500 rounded-md hover:bg-blue-400 dark:hover:bg-gray-500/50 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-gray-100 focus:ring-opacity-50" />
        </form>
    );
}