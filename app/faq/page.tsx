import { Metadata } from 'next';

import FaqAccordion from '@/components/accordion/faq';
import AboutFaq from '@/components/about/faq';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions (FAQs)',
}

export default function Faq(){
    return (
        <AboutFaq />
    );
}