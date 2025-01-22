"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function Products(){
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
                      Products
                  </Breadcrumb.Item>
              </Breadcrumb>
          </div>
        </div>
      );
    }