"use client"

import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from 'flowbite-react';
import { HiQuestionMarkCircle, HiHome } from "react-icons/hi";

export default function About(){
    return (
        <div>
            <div>
                <Breadcrumb className="bg-gray-50 px-5 py-3 border border-t-0 dark:bg-gray-900">
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
            <div className="overflow-hidden sm:grid sm:grid-cols-2 pb-24">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24 hidden sm:block">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl sm:pt-10 md:pt-20">
                            About Blazed Labs
                        </h1>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            We are a team of innovative thinkers and problem solvers dedicated to creating cutting-edge technology solutions for businesses and individuals alike.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <Link
                                href="/faq"
                                className="inline-block rounded bg-error px-12 py-3 text-sm font-medium text-white transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-400">
                            FAQs
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    alt="Arena"
                    width={1500}
                    height={1500}
                    src="/images/blazed-arena.jpg"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </div>
            <hr />
            <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <Image
                            width={1200}
                            height={1200}
                            alt="Beaker"
                            src="/images/lockscreen-beaker.png"
                            className="absolute inset-0 h-full w-full object-cover rounded-md"
                            />
                        </div>

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <h2 className="text-3xl font-bold">
                                    How are we Unleashing Innovation?
                                </h2>
                                <p>
                                    At Blazed Labs, we are committed to staying at the forefront of the tech industry and delivering the best products and services to our clients. 
                                    We believe in collaboration and transparency, and we work closely with our clients to understand their needs and develop custom solutions that meet their unique goals.
                                </p>
                                <p>
                                    Whether you are a small business owner looking to streamline your operations or an individual looking to improve your online presence, we have the tools and expertise to help you succeed. 
                                    Thank you for considering Blazed Labs as your partner in technology. We look forward to working with you.
                                </p>
                                <a
                                    href="https://blazed.company/about"
                                    target="_blank"
                                    className="inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-red-400">
                                    <HiQuestionMarkCircle className="inline-flex w-4 h-4 mr-1" />
                                    <span>
                                        Learn More
                                    </span>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}