import type { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation';
import React from 'react';

import { getSinglePost } from '@/lib/hooks/blog';
import SinglePost from "@/components/single";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = (await params).id;
    const document = await getSinglePost(id);
    if(!document){ 
        redirect('/404');
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