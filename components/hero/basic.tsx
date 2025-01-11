"use client"

import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'flowbite-react';
import { HiOutlineCode } from 'react-icons/hi';

export default function BasicHero(props: any){
    return (
        <div className="text-gray-800">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full hidden lg:flex lg:w-1/3 md:pl-10">
                    <Image src={props.image} width={300} height={300} alt="Hero Image" className="rounded-md" />
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <i className="mb-8 text-red-600">
                        <HiOutlineCode className="w-10 h-10" />
                    </i>
                    <h2 className="text-3xl font-semibold leadi dark:text-gray-300">
                        {props.title}
                    </h2>
                    <p className="mt-4 mb-8 text-sm dark:text-gray-300">
                        {props.body}
                    </p>
                    <div>
                        <Link href={props.action.href} target={props.action.target} className="inline-flex">
                            <Button gradientMonochrome="failure" className="block w-full">
                                {props.action.label}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}