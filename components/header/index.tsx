'use client'

import React from 'react'

import { usePathname } from 'next/navigation' 
import Link from 'next/link';

import { Navbar, Dropdown } from "flowbite-react";

import { config, brand } from "@/config/site"
import { mainMenu } from '@/config/menu';

import Logo from './logo';
import Auth from './auth';
import Theme from './theme';

import './header.css';

export default function Header() {
    const pathname = usePathname();

    return (
        <Navbar className="select-none shadow-sm main" fluid={true} rounded={false}>
            <Navbar.Brand href="/">
                <span title={config.name} className="hover:opacity-75">
                    <Logo />
                </span>
                <span className="sr-only">
                    {config.name}
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {mainMenu.nav.map((item, index) => {
                    if(!item.submenu){
                        return (
                            <Navbar.Link
                                href={item.href}
                                active={pathname === item.href ? true : false}
                                className="flex"
                                key={index}
                            >
                                <span className="block py-4">
                                    {item.label}
                                </span>
                            </Navbar.Link>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <div className="block p-0 md:pt-4">
                                    <Dropdown inline label={item.label}>
                                        {
                                            item.submenu.map((subitem, sindex) => {
                                                return (
                                                    <Dropdown.Item 
                                                        key={sindex} 
                                                        as={Link} 
                                                        className={`nav-dropdown-item ${pathname === subitem.href ? 'active' : ''}`} 
                                                        href={subitem.href}>
                                                        {subitem.label}
                                                    </Dropdown.Item>
                                                );
                                            })
                                        }
                                    </Dropdown>
                                </div>
                            </li>
                        );
                    }
                })}
                <Theme />
                <Auth />
            </Navbar.Collapse>
        </Navbar>
    );

}

