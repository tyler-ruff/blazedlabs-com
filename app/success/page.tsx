import { Metadata } from 'next';

import SuccessPage from '@/components/contact/success';

export const metadata: Metadata = {
    title: 'Thank you for reaching out!',
}

export default function Contact(){
    return (
        <div>
           <SuccessPage />
        </div>
    );
}