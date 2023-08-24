import { Menu, MenuItem } from "@/util/site";

/**
 * _id Key: 
 * root     -      Main menu
 * auth     -      Auth menu
 */
const mainMenu = {
    _id: "root",
    nav: [
        {
            label: "Home",
            href: "/"
        } as MenuItem,
        {
            label: "About",
            href: "/about"
        } as MenuItem,
        {
            label: "Company",
            submenu: [
                {
                    label: "FAQ",
                    href: "/faq"
                },
                {
                    label: "Media",
                    href: "/press"
                },
                {
                    label: "Blog",
                    href: "/blog"
                }
            ] as MenuItem[]
        },
        {
            label: "Solutions",
            submenu: [
                {
                    label: "Services",
                    href: "/services"
                },
                {
                    label: "Products",
                    href: "/products"
                },
                {
                    label: "Libraries",
                    href: "/libs"
                }
            ] as MenuItem[]
        },
        {
            label: "Contact",
            href: "https://blazed.contact/"
        } as MenuItem,
    ]
} as Menu;

const authMenu = {
    guest: {
        _id: "auth",
        nav: [
            {
                label: "Login",
                href: "/login"
            },
            {
                label: "Sign Up",
                href: "/register"
            }
        ] as MenuItem[]
    } as Menu,
    user: {
        _id: "auth",
        nav: [
            {
                label: "Profile",
                href: "/profile"
            },
            {
                label: "Account",
                href: "/account"
            },
            {
                label: "_"
            },
            {
                label: "Logout",
                href: "/logout"
            },
        ] as MenuItem[]
    } as Menu,
};

const footerMenu = {
    one: [
        {
            label: "Company"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Blog",
            href: "/blog"
        },
    ] as MenuItem[],
    two: [
        {
            label: "Solutions"
        },
        {
            label: "Products",
            href: "/products"
        },
        {
            label: "Services",
            href: "/services"
        },
    ] as MenuItem[],
    three: [
        {
            label: "Contact"
        },
        {
            label: "Inquire",
            href: "/contact"
        },
        {
            label: "Support",
            href: "/support"
        },
    ] as MenuItem[],
}

export {
    mainMenu,
    authMenu,
    footerMenu
};