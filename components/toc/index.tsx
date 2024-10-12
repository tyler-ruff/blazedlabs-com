'use client'
import { useState } from 'react';
import Script from 'next/script';

import { ITableOfContents } from "./data";
import LoadingPage from '@/components/loading';

export default function TableOfContents(props: ITableOfContents){
    const [ loading, setLoading ] = useState( true );
    return (
        <div id="toc-root">
            {loading ? <LoadingPage /> : ""}
            <Script src="/js/toc.js" onLoad={() => {setLoading( false )}}></Script>
        </div>
    );
}