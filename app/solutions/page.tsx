import { Metadata } from "next";

import Solutions from "@/components/solutions";

export const metadata: Metadata = {
    title: 'Our Solutions',
}

export default function Page(){
    return (
        <Solutions />
    );
}