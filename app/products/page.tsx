import { Metadata } from 'next';

import ProductCard from "@/components/card/product";

export const metadata: Metadata = {
  title: 'Our Products',
}

export default function Page(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
            <ProductCard title="Beez Marketing" subtitle="Advertising Network" tags={["Ads", "Marketing"]} url="https://beez.top/" target="_blank" />
            <ProductCard title="Blazed One" subtitle="Media Production" tags={["East", "Coast", "Hollywood", "Media"]} url="https://blz.one/" target="_blank" />
            <ProductCard title="Blazed Quest" subtitle="Project Management" tags={["Task", "Manage"]} url="https://blazed.quest/" target="_blank" />
            <ProductCard title="Blazed Development" subtitle="Project Management" tags={["Developers", "Open Source"]} url="https://blazed.dev/" target="_blank" />
            <ProductCard title="Blazed City" subtitle="Community" tags={["Resources", "Open Source"]} url="https://blazed.city/" target="_blank" />
        </div>
    );
}