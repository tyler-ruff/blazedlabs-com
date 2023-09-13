"use client"

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { db } from '@/config/firebase';
import { Timestamp, collection, doc, getDoc } from 'firebase/firestore';

import { remark } from 'remark';
import html from 'remark-html';

import Loading from '@/app/loading';
import { estimateReadTime } from '@/lib/functions';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import './blog.css';

export default function SinglePost(props: any){
    const [loading, setLoading] = useState<boolean>(true);
    const [documentData, setDocumentData] = useState<any | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);

    const [mdxHtml, setMdxHtml] = useState<string | null>(null);
    const [date, setDate] = useState<Date | null>(null);

    const processedContent = async(contentRaw: string) => await remark()
        .use(html)
        .process(contentRaw).then((content) => {
        setMdxHtml(content.toString());
    });
    const processedDate = async(created: Timestamp) => {
        const date = new Date(created.seconds * 1000);
        setDate(date);
    }

    useEffect(() => {
        const fetchDocument = async () => {
          try {
            const docRef = doc(db, 'posts', props.postId);
            const docSnapshot = await getDoc(docRef);
    
            if (docSnapshot.exists()) {
              setDocumentData(docSnapshot.data());
              setLoading(false);
              processedContent(docSnapshot.data().text);
              processedDate(docSnapshot.data().created_on);
            } else {
              console.log('404 Error: Post does not exist');
              setNotFound(true);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error fetching document from Firestore:', error);
            setNotFound(true);
            setLoading(false);
          }
        };
        fetchDocument();
    }, []);

    if(loading){
        return (
            <Loading />
        );
    }

    if(notFound){
        redirect('/blog');
    }

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
                    <Breadcrumb.Item href="/blog">
                        Blog
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        View Post
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="max-w-2xl px-6 py-5 lg:py-16 mx-auto space-y-12">
                <article className="space-y-8 text-gray-900 dark:text-gray-200">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracki md:text-5xl">
                            {documentData.title}
                        </h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center p-3 text-gray-600 bg-gray-100 dark:bg-gray-800">
                            <div className="flex items-center md:space-x-2">
                                <p className="text-sm">
                                    {
                                        date && (
                                            <time title="Published Date" dateTime={date.toUTCString()}>
                                                {
                                                    date.toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })
                                                }
                                            </time>
                                        )
                                    }
                                </p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                                <span title="Estimated read time">
                                    {estimateReadTime(mdxHtml || '')} read 
                                </span>
                                {documentData.categories.map((category: string, index: number) => {
                                    return (
                                        <span key={index} title={`Published in ${category}`} className="capitalize px-2">
                                            &bull;&nbsp;&nbsp;
                                            {category}
                                        </span>
                                    )
                                })}
                            </p>
                        </div>
                    </div>
                    <div>
                        {mdxHtml && (
                            <div className="prose blog-content dark:text-gray-200" dangerouslySetInnerHTML={{ __html: mdxHtml }} />
                        )}
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-600">
                        {
                            documentData.tags.map((tag: string, index: number) => {
                                return (
                                    <a key={index} rel="noopener noreferrer" href="#" className="capitalize px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">
                                        #{tag}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}