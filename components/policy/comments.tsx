"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import CommentPolicyMD from '@/content/comment.mdx';

export default function CommentPolicy(){
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
                        Comment Policy
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="max-w-3xl relative mx-auto mb-5 px-10 py-5 dark:text-white prose">
                <CommentPolicyMD />
            </div>
        </div>
    )
}