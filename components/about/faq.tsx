"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import FaqAccordion from "@/components/accordion/faq";

import styles from "./faq.module.css";

export default function AboutFaq(){
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
                    <Breadcrumb.Item href="/about">
                        About
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        FAQs
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={styles.accordion}>
                <div className="mx-2 md:mx-20 py-8">
                    <h1 className="text-center text-4xl font-bold mb-5 md:mb-10 dark:text-gray-100">
                        Frequently Asked Questions
                    </h1>
                    <FaqAccordion />
                </div>
            </div>
        </div>
    )
}