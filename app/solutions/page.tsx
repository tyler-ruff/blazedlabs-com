import { Metadata } from "next";

import Solutions from "@/components/solutions";
import SolutionCard from "@/components/card/solution";
import { HiTerminal, HiPhone, HiPencil, HiBeaker } from 'react-icons/hi';
import AdvancedHero from '@/components/hero/advanced';
import BasicHero from '@/components/hero/basic';
import { MenuItem } from '@/lib/types/site';

export const metadata: Metadata = {
    title: 'Our Solutions',
}

export default function Page(){
    return (
        <div>
            <Solutions />
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
                    icon={(<HiBeaker className="h-8 w-8" />)}
                />
                <SolutionCard 
                    title="Develop." 
                    description="Discover how Blazed can help your business build software and websites. "
                    url="https://blazed.dev/" 
                    target="_blank"
                    icon={(<HiTerminal className="h-8 w-8" />)}
                />
                <SolutionCard 
                    title="Publish." 
                    description="We help you get your voice out there, any medium: digital or physical."
                    url="https://blazed.xyz/" 
                    target="_blank" 
                    icon={(<HiPencil className="h-8 w-8" />)}
                />
            </div>
            <div className="max-w-6xl relative mx-auto lg:pb-10 lg:pt-4">
                <BasicHero 
                    image="/images/ibis.jpg"
                    title="Learn more about our software solutions"
                    body="We build open source software and manage decentralized development teams."
                    action={{
                        label: "Learn More",
                        href: "/about"
                    } as MenuItem}
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

    );
}