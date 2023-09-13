import { Metadata } from 'next';

import Security from '@/components/about/security';

export const metadata: Metadata = {
    title: 'Ensuring Data Security',
}

export default function Page(){
    return (
        <Security />
    );
}