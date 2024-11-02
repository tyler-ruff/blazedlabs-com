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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 pt-4 px-4">
            <SolutionCard 
                title="Innovation" 
                description="We build computer networks, computer systems, and we design platforms." 
                url="https://blazed.space/" 
                target="_blank"
                icon={(<HiPhone className="h-8 w-8" />)} 
            />
            <SolutionCard 
                title="Software Development" 
                description="Discover how Blazed can help your business build software and websites. "
                url="https://blazed.dev/" 
                target="_blank"
                icon={(<HiCloud className="h-8 w-8" />)} 
            />
            <SolutionCard 
                title="Publishing" 
                description="We help you get your voice out there, any medium: digital or physical."
                url="https://blazed.xyz/" 
                target="_blank" 
                icon={(<HiPencil className="h-8 w-8" />)} 
            />
        </div>
        <div className='px-5'>
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