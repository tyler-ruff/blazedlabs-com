import { Metadata } from 'next';

import Products from '@/components/products';

export const metadata: Metadata = {
  title: 'Our Products',
}

export default function Page(){
    return (
        <article>
            <Products />
        </article>
    );
}