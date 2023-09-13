"use client"

import { Breadcrumb } from 'flowbite-react';
import SolutionCard from "@/components/card/solution";
import { HiCloud, HiPhone, HiPencil, HiHome } from 'react-icons/hi';
import BasicHero from '../hero/basic';
import { MenuItem } from '@/lib/types/site';

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
                title="Telecom" 
                description="We build call centers and engineer telecom solutions. Learn how we can help your business communications." 
                url="https://blazed.tel/" 
                target="_blank"
                icon={(<HiPhone className="h-8 w-8" />)} 
            />
            <SolutionCard 
                title="Cloud Systems" 
                description="Discover how Blazed can help your business build a cloud or on-prem network. "
                url="https://blazed.systems/" 
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
        <BasicHero 
            image="/images/ibis.jpg"
            title="Discover our software solutions"
            body="We build open source software and manage decentralized development teams."
            action={{
                label: "Learn More",
                href: "https://blazed.dev/"
            } as MenuItem}
        />
    </div>
    )
}