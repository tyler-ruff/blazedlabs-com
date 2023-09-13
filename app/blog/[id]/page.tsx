import { Metadata } from 'next';

import SinglePost from "@/components/single";

export const metadata: Metadata = {
    title: 'View Blog Post',
}

export default function Page({ params }: { params: { id: string } }) {
    return <SinglePost postId={params.id} />
}