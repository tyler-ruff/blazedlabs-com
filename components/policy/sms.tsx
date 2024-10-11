"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import SMSTerms from '@/content/sms.mdx';

export default function SMSTermsOfService(){
    return (
        <div>
            <div className="mb-5">
                <Breadcrumb className="bg-gray-50 px-5 py-3 border border-t-0 dark:border-transparent dark:bg-gray-900">
                    <Breadcrumb.Item
                        href="/"
                        icon={HiHome}
                    >
                        <span>
                        Home
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        SMS Terms and Conditions
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="max-w-3xl relative mx-auto px-10 py-5 mb-5 dark:text-white prose">
                <SMSTerms />
            </div>
        </div>
    )
}