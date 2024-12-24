'use client'

import { Navbar } from 'flowbite-react';
import AuthMenu from '@/components/auth/menu';

export default function ProfileNav(){
    return (
    <Navbar fluid rounded className="border-b">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white select-none">
            Nav Menu
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <AuthMenu />
        </div>
      </Navbar>
    )
}