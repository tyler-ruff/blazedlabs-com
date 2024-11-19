import type { Metadata, ResolvingMetadata } from 'next'

import SinglePost from "@/components/single";
import React from 'react';
import { getSinglePost } from '@/lib/hooks/blog';

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = (await params).id;
    const document = await getSinglePost(id);
    if(!document){ throw new Error("Blog post not found"); }
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
        <article role="article">
            <SinglePost postId={params.id} />
        </article>
    );
}