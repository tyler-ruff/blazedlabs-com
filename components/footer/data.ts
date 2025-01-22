import { MenuItem } from "@/lib/types/site";

export interface FooterLinks{
    title: string;
    items: MenuItem[];
}

export const linksFooter = [
    {
        title: "Company",
        items: [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "About",
                href: "/about"
            },
            {
                label: "Solutions",
                href: "/solutions"
            },
            {
                label: "Corporate",
                target: "_blank",
                href: "https://blazed.company/"
            },
        ]
    },
    {
        title: "Community",
        items: [
            {
                label: "Marketing",
                target: "_blank",
                href: "https://blazed.space/"
            },
            {
                label: "Developers",
                target: "_blank",
                href: "https://blazed.dev/"
            },
            {
                label: "Publishing",
                target: "_blank",
                href: "https://blazed.xyz/"
            }
        ]
    },
    {
        title: "Site",
        items: [
            {
                label: "Blog",
                href: "/blog"
            },
            {
                label: "FAQ",
                href: "/faq"
            },
            {
                label: "Privacy",
                href: "/privacy"
            }
        ]
    }
] as FooterLinks[];