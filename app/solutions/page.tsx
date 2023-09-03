import SolutionCard from "@/components/card/solution";

import { HiCloud, HiPhone, HiPencil } from 'react-icons/hi';

export default function Page(){
    return (
        <div className="grid grid-cols-3 space-x-5 py-10 px-4">
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
    );
}