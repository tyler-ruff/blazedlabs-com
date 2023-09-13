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
                href: "https://blazed.dev/"
            },
            {
                label: "City",
                href: "https://blazed.city/"
            },
            {
                label: "R&D",
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