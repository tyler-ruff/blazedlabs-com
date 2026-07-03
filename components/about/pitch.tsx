"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function PitchDeck(){
    const documentUrl = 'https://storage.googleapis.com/blz-one-9e383.appspot.com/PDF/Blazed-One-Flyer.pdf';
    return (
        <div>
            <div className="mb-5">
                <Breadcrumb className="bg-gray-50 px-5 py-3 border dark:border-transparent dark:bg-gray-900">
                    <Breadcrumb.Item
                        href="/"
                        icon={HiHome}
                    >
                        <span>
                        Home
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/about">
                        About
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Pitch Deck
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="mx-20 sm:mx-0 mb-10">
                <object
                    data={documentUrl}
                    type="application/pdf"
                    width="100%"
                    height="1150px"
                    title="Embedded PDF Viewer"
                >
                <iframe
                    src={documentUrl}
                    width="100%"
                    height="100%"
                    title="Embedded PDF Viewer"
                    >
                        <p>
                            Your browser does not support PDFs. 
                            Please download the PDF to view it: 
                            <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                                Download PDF
                            </a>
                        </p>
                    </iframe>
                </object>
            </div>
        </div>
    );
}