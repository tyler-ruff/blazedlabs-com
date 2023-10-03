import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Browse Blog by Tag`,
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            Tag: {params.slug}
        </div>
    );
}