"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import UsePolicy from '@/content/use.mdx';

export default function AcceptableUsePolicy(){
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
                    <Breadcrumb.Item
                        href="/terms"
                    >
                        <span>
                        Terms
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Acceptable Use Policy
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="max-w-3xl relative mx-auto mb-5 px-10 py-5 dark:text-white prose">
                <UsePolicy />
            </div>
        </div>
    )
}