import { Metadata } from 'next';

import BrowseBlog from "@/components/browse";

type Props = {
    params: Promise<{ query: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const query = (await params).query;
    return {
        title: `${query} | Search Blog`,
        description: `Search the Blazed Labs blog for: ${query}`
    }
}

export default function Page({ params }: { params: { query: string } }) {
    return (
        <div>
            <BrowseBlog searchTerm={params.query} />
        </div>
    );
}