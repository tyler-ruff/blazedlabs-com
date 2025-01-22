import React from "react";

import Products from '@/components/products';
import ProductsMenu from "@/components/products/menu";

export default function ProfileLayout({
    children,   
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>
                <Products />
                <ProductsMenu />
            </nav>
            <div>
                {children}
            </div>
        </section>
    )
}