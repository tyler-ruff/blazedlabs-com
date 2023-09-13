import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
}

export default function Page(){
    return (
        <About />
    );
}