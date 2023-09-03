import { Metadata } from 'next';

import FaqAccordion from '@/components/accordion/faq';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions (FAQs)',
}

export default function Faq(){
    return (
        <div className="mx-2 md:mx-20 py-8">
            <h1 className="text-center text-4xl font-bold mb-5 md:mb-10">
                Frequently Asked Questions (FAQs)
             </h1>
            <FaqAccordion />
        </div>
    )
}