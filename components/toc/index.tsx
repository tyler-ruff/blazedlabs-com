'use client'
import Script from 'next/script';

import { ITableOfContents } from "./data";
import LoadingPage from '@/components/loading';

export default function TableOfContents(props: ITableOfContents){
    return (
        <div id="toc-root">
            <div id="toc-container">
                <LoadingPage />
            </div>
            <Script src="/js/toc.js"></Script>
        </div>
    );
}