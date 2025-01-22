import { Menu, MenuItem } from "@/lib/types/site";

const mainMenu = {
    _id: "root",
    nav: [
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
            label: "Blog",
            href: "/blog"
        }
    ] as MenuItem[],
    cta: {
        label: "Contact",
        href: "/contact"
    } as MenuItem
} as Menu;

export {
    mainMenu
};