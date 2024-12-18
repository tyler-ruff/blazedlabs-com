"use client"

import { Breadcrumb } from 'flowbite-react';
import SolutionCard from "@/components/card/solution";
import { HiCloud, HiPhone, HiPencil, HiHome } from 'react-icons/hi';
import AdvancedHero from '../hero/advanced';

export default function Solutions(){
    return (
        <div>
            <div className="mb-5">
              <Breadcrumb className="bg-gray-50 px-5 py-3 border border-t-0 dark:border-transparent dark:bg-gray-900">
                  <Breadcrumb.Item
                      href="/"
                      icon={HiHome}
                  >
                      <span>
                      Home
                      </span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      Solutions
                  </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="px-5">
                <h1 className="text-3xl my-10 mx-5 inline-flex">
                    Blazed One Solution
                </h1>
                <a href="/flyer" target="_blank" className="underline inline-flex hover:opacity-75" title="Learn more about the Blazed One Solution">
                    Download Pitch Deck
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 pt-4 px-4 select-none">
                <SolutionCard 
                    title="Design." 
                    description="We craft impactful experiences through meaningful UI/UX design."
                    url="https://blazed.space/" 
                    target="_blank"
                    icon={(<HiPhone className="h-8 w-8" />)}
                />
                <SolutionCard 
                    title="Develop." 
                    description="Discover how Blazed can help your business build software and websites. "
                    url="https://blazed.dev/" 
                    target="_blank"
                    icon={(<HiCloud className="h-8 w-8" />)}
                />
                <SolutionCard 
                    title="Publish." 
                    description="We help you get your voice out there, any medium: digital or physical."
                    url="https://blazed.xyz/" 
                    target="_blank" 
                    icon={(<HiPencil className="h-8 w-8" />)}
                />
            </div>
            <div className="px-5">
                <AdvancedHero
                    headline="Sleep peacefully knowing your website is performing at it’s best."
                    description="We can help your business thrive with software development, network administrative services, and publishing. Drop us a line today to see how we can turn your dreams into reality."
                    url="/contact"
                    ctaText="Get in Touch"
                    imageURL="/images/beaker-cobalt.png"
                />
            </div>
        </div>
    )
}