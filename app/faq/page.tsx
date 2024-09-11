import { Metadata } from 'next';

import AboutFaq from '@/components/about/faq';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
}

export default function Faq(){
    return (
        <AboutFaq />
    );
}