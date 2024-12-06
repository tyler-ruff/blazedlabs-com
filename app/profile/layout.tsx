import ProfileNav from "@/components/profile/nav";
import React from "react";

export default function ProfileLayout({
    children,   
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>
                <ProfileNav />
            </nav>
            <div>
                {children}
            </div>
        </section>
    )
}