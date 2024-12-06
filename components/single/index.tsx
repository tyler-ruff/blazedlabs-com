"use client"

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Timestamp } from 'firebase/firestore';

import { getSinglePost } from '@/lib/hooks/blog';

import { remark } from 'remark';
import html from 'remark-html';

import { estimateReadTime } from '@/lib/functions';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import Comments from '../comments';
import SocialShare from '../share';
import LoadingPage from '@/components/loading';

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
            const document = await getSinglePost(props.postId);
            if (document !== undefined) {
              setDocumentData(document);
              setLoading(false);
              processedContent(document.text);
              processedDate(document.created_on);
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
            <LoadingPage />
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
            <article role="article" className="max-w-2xl px-6 py-5 lg:py-16 mx-auto space-y-12">
                <div aria-label="Blog Post" className="space-y-8 text-gray-900 dark:text-gray-200">
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
                            <div className="flex-shrink-0 mt-3 text-sm md:mt-0">
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
                            </div>
                        </div>
                    </div>
                    <div>
                        {mdxHtml && (
                            <div className="prose blog-content dark:text-gray-200" dangerouslySetInnerHTML={{ __html: mdxHtml }} />
                        )}
                    </div>
                </div>
                <div className="flex justify-between my-6 border-b border-dashed border-gray-600">
                    <div aria-label="Tags" className="inline-flex flex-wrap py-6 space-x-2 space-y-1 select-none">
                        <span className="text-sm pt-3 pl-2">
                            Tags: 
                        </span>
                        {
                            documentData.tags.map((tag: string, index: number) => {
                                return (
                                    <Link key={index} rel="noopener noreferrer" href={`/blog/search/${encodeURI(tag.toLowerCase())}`} className="capitalize px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">
                                        #{tag}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div aria-label="Share Post" className="inline-flex pt-4 select-none">
                        <SocialShare />
                    </div>
                </div>
                <div aria-label="Post Comments">
                    <Comments postId={props.postId} />
                </div>
            </article>
        </div>
    );
}