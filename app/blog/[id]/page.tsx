import type { Metadata, ResolvingMetadata } from 'next'

import SinglePost from "@/components/single";
import React from 'react';
import { getSinglePost } from '@/lib/hooks/blog';
import { redirect } from 'next/navigation';

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = (await params).id;
    const document = await getSinglePost(id);
    if(!document){ 
        redirect('/');
    }
    return {
        title: `${document.title} | Blog`,
        description: document.description,
        openGraph: {
            title: document.title,
            type: "article",
            url: `https://blazedlabs.com/blog/${id}`,
            images: [{url: `https://blazedlabs.com/api/og/blog?title=${document.title}`}],
        }
    }
}

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div role="article">
            <SinglePost postId={params.id} />
        </div>
    );
}