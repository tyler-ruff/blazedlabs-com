'use client'
import Link from 'next/link';
import Script from 'next/script';

export default function TrustWidget(){
    return (
        <div>
            <div 
                className="trustpilot-widget" 
                data-locale="en-US" 
                data-template-id="56278e9abfbbba0bdcd568bc" 
                data-businessunit-id="679045494dd41776a4167cc5" 
                data-style-height="52px" 
                data-style-width="100%">
                <Link 
                    href="https://www.trustpilot.com/review/blazedlabs.com" 
                    target="_blank" 
                    rel="noopener">
                    Trustpilot
                </Link>
            </div>
            <Script
                src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
            ></Script>
        </div>
    )
}