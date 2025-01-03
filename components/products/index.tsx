"use client"

import { useEffect, useState } from 'react';

import ProductCard from "@/components/card/product";
import { Product } from '@/lib/types/product';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { getProducts } from '@/lib/hooks/products';
import BasicHero from '../hero/basic';
import { MenuItem } from '@/lib/types/site';

import LoadingPage from '@/components/loading';

export default function Products(){
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any | null>(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const documents = await getProducts();
            setData(documents);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data from Firestore:', error);
          }
        };
    
        fetchData();
      }, []);

      if(loading){
        return (
          <LoadingPage />
        );
      }
    
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
              {data?.map((item: Product) => (
                <ProductCard 
                  key={item.id} 
                  title={item.title} 
                  subtitle={item.subtitle} 
                  tags={item.tags} 
                  url={item.url} 
                  target="_blank"
                />
              ))}
          </div>
          <BasicHero 
                image="/images/ibis.jpg"
                title="Discover our software solutions"
                body="We build open source software and manage decentralized development teams."
                action={{
                    label: "Learn More",
                    href: "https://blazed.dev/"
                } as MenuItem}
            />
        </div>
      );
    }