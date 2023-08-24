'use client'

/**
 * Auth Menu & Auth Status
 * Usage: <Auth />
 * @function
 */
import Link from "next/link";

import { useSession } from "next-auth/react";

import { Navbar, Dropdown } from "flowbite-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { authMenu } from '@/config/menu';


export default function Auth(){
    const { data: session } = useSession();
    /**
     * Avatar Component
     * Usage: <Avatar />
     * @constant
     * @returns JSX
     */
    const Avatar = () => {
        if(session?.user){
            let image: string = "";
            if(session.user.image !== undefined && session.user.image !== null){
                image = session.user.image;
            }
            return (
                <img alt="User Avatar" className="w-10 h-10 rounded-full" src={image} />
            );
        } else {
            return (
                <FontAwesomeIcon icon={faUser} />
            );
        }
    };
    /**
     * Auth Menu Component
     * Usage: <AuthMenu />
     * @constant
     * @returns JSX
     */
    const AuthMenu = () => {
        let title = "Welcome Guest";
        let subtitle = "Not logged in.";
        let menu = authMenu.guest;
        if(session){
            if(session.user?.name !== undefined && session.user.name !== null && session.user?.email !== undefined && session.user.email !== null){
                title = session.user.name;
                subtitle = session.user.email;
                menu = authMenu.user;
            }
        }
        return (
            <div>
                <Dropdown.Header>
                    <span className="block text-sm">
                        {title}
                    </span>
                    <span className="block truncate text-xs font-light">
                        {subtitle}
                    </span>
                </Dropdown.Header>
                <ul className="p-2">
                    {menu.nav.map((menuItem, index) => {
                        if(menuItem.label === "_"){
                            return (
                                <li key={index}>
                                    <Dropdown.Divider />
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <Link className="block px-3 py-2 hover:underline" href={menuItem.href || ``}>
                                        {menuItem.label}
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        )
    };

    return (
        <li className="block p-0 md:pt-4">
            <Dropdown inline label={<Avatar />}>
                <AuthMenu />
            </Dropdown>
        </li>
    );
}