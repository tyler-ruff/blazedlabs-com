"use client"

import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from 'flowbite-react';
import { HiOutlineCheck, HiHome } from "react-icons/hi";

export default function About(){
    return (
        <div>
            <div>
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
                        About
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    );
}