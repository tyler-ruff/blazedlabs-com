import { Metadata } from 'next';

import ContactPage from '@/components/contact';

export const metadata: Metadata = {
    title: 'Contact Us',
}

export default function Contact(){
    return (
        <div>
            <ContactPage />
        </div>
    );
}