"use client"

import { useEffect, useState } from 'react';

import Loading from '@/app/loading';

import { db } from '@/config/firebase';
import { collection, getDocs, where } from 'firebase/firestore';

import BlogCard from "./card";
import { Post } from '@/lib/types/blog';
import { Pagination, Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function BrowseBlog(){
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any | null>(null);
    const [page, setPage] = useState<number>(1);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const documents = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
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
            <Loading />
        );
    }

    return (
        <div>
            <div className="mb-5">
                <Breadcrumb className="bg-gray-50 px-5 py-3 border dark:bg-gray-900">
                    <Breadcrumb.Item
                        href="/"
                        icon={HiHome}
                    >
                        <span>
                        Home
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Blog
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="grid grid-cols-2">
                {data?.map((item: Post) => (
                <BlogCard 
                    key={item.id} 
                    itemId={item.id} 
                    title={item.title} 
                    description={item.description} 
                    categories={item.categories} 
                    created={item.created_on}
                /> 
                ))}
            </div>
            <div className="py-5">
                <Pagination 
                    currentPage={page} 
                    onPageChange={function (newPage: number): void {
                        setPage(newPage);
                    } } 
                    totalPages={4} 
                />
            </div>
        </div>
    );
}