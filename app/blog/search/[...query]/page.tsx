import { Metadata } from 'next';

import BrowseBlog from "@/components/browse";

export const metadata: Metadata = {
    title: `Search Blog`,
}

export default function Page({ params }: { params: { query: string } }) {
    return (
        <div>
            <BrowseBlog searchTerm={params.query} />
        </div>
    );
}