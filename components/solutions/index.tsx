"use client"

import { Breadcrumb } from 'flowbite-react';
import SolutionCard from "@/components/card/solution";
import { HiCloud, HiPhone, HiPencil, HiHome } from 'react-icons/hi';
import AdvancedHero from '../hero/advanced';
import BasicHero from '../hero/basic';
import { MenuItem } from '@/lib/types/site';

export default function Solutions(){
    return (
        <div>
            <div className="mb-5">
              <Breadcrumb className="bg-gray-50 px-5 py-3 border border-t-0 dark:border-transparent dark:bg-gray-900">
                  <Breadcrumb.Item
                      href="/"
                      icon={HiHome}
                  >
                      <span>
                      Home
                      </span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      Solutions
                  </Breadcrumb.Item>
              </Breadcrumb>
            </div>
        </div>
    )
}