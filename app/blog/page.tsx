import { Metadata } from 'next';

import BrowseBlog from "@/components/browse";

export const metadata: Metadata = {
    title: 'Browse Blog',
}

export default function Page(){
    return (
        <BrowseBlog />
    );
}