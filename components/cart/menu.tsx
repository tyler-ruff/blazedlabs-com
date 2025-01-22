'use client'

import { Dropdown } from 'flowbite-react';
import Link from 'next/link';

import { HiShoppingCart } from "react-icons/hi";

export default function CartMenu(){
    return (
        <Dropdown
          arrowIcon={false}
          inline
          label={<HiShoppingCart title="View Cart & Checkout" className="w-6 h-6 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-600" />}
          placement="bottom-end"
        >
          <div className="mt-4 space-y-6 px-3 py-2 pt-0">
            <ul className="space-y-4">
                <li className="flex items-center gap-4">
                    <img
                    src="https://blazed.sirv.com/blazedlabs.com/john-mcmahon-ljjcoULkxL8-unsplash.jpg?w=50&h=50"
                    alt=""
                    className="size-16 rounded object-cover"
                    />

                    <div>
                    <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                        <dt className="inline">Size:</dt>
                        <dd className="inline">XXS</dd>
                        </div>

                        <div>
                        <dt className="inline">Color:</dt>
                        <dd className="inline">White</dd>
                        </div>
                    </dl>
                    </div>
                </li>

                <li className="flex items-center gap-4">
                    <img
                    src="https://blazed.sirv.com/blazedlabs.com/john-mcmahon-ljjcoULkxL8-unsplash.jpg?w=50&h=50"
                    alt=""
                    className="size-16 rounded object-cover"
                    />

                    <div>
                    <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                        <dt className="inline">Size:</dt>
                        <dd className="inline">XXS</dd>
                        </div>

                        <div>
                        <dt className="inline">Color:</dt>
                        <dd className="inline">White</dd>
                        </div>
                    </dl>
                    </div>
                </li>

                <li className="flex items-center gap-4">
                    <img
                    src="https://blazed.sirv.com/blazedlabs.com/john-mcmahon-ljjcoULkxL8-unsplash.jpg?w=50&h=50"
                    alt=""
                    className="size-16 rounded object-cover"
                    />

                    <div>
                    <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                        <dt className="inline">Size:</dt>
                        <dd className="inline">XXS</dd>
                        </div>

                        <div>
                        <dt className="inline">Color:</dt>
                        <dd className="inline">White</dd>
                        </div>
                    </dl>
                    </div>
                </li>
                </ul>

                <div className="space-y-4 text-center">
                <Link
                    href="/cart"
                    className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                >
                    View my cart (2)
                </Link>

                <Link
                    href="/cart/checkout"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                    Checkout
                </Link>
                </div>
            </div>
        </Dropdown>
    );
}