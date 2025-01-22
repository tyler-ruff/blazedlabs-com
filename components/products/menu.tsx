'use client'

import { Navbar } from 'flowbite-react';
import AuthMenu from '@/components/auth/menu';
import CartMenu from '@/components/cart/menu';

export default function ProductsMenu(){
    return (
      <Navbar fluid rounded className="border-b max-w-7xl relative mx-auto">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white select-none">
            Filters
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 space-x-3">
          <AuthMenu />
          <CartMenu />
        </div>
      </Navbar>
    );
}