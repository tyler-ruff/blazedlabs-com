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
                label: "Products",
                href: "/products"
            }
        ]
    },
    {
        title: "Community",
        items: [
            {
                label: "Developers",
                target: "_blank",
                href: "https://blazed.dev/"
            },
            {
                label: "Company",
                target: "_blank",
                href: "https://blazed.company/"
            },
            {
                label: "R&D",
                target: "_blank",
                href: "https://blazed-space.github.io/"
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