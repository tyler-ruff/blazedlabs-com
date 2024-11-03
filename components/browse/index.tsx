"use client"

import { useEffect, useState } from 'react';

import Loading from '@/app/loading';

import BlogCard from "./card";
import { Post } from '@/lib/types/blog';
import { Pagination, Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import SearchForm from '@/components/search/form';

import { itemsPerPage } from '@/config/blog';
import { IBrowseBlog } from './data';
import { getBlogPosts } from '@/lib/hooks/blog';

export default function BrowseBlog(props: IBrowseBlog){
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    //const categoriesValues = Object.values(Categories);

    const calculatePages = (localData: any[]) => {
        if(localData.length > 0){
            setTotalPages(Math.ceil(localData.length / itemsPerPage));
        }
    };
    
    const fetchData = async () => {
        if(props.searchTerm === undefined){
                const documents = await getBlogPosts();
                if(documents !== undefined){
                    setData(documents);
                    calculatePages(documents);
                    setLoading(false);
                }
        } else {
            const searchCall = await fetch(`/api/search?query=${props.searchTerm}`);
            const results = await searchCall.json();
            if(results.results){
                const documents = results.results.map((result: any) => ({
                    id: result.path.split('/')[1],
                    ...result,
                }));
                setData(documents);
                calculatePages(documents);
                setLoading(false);
            }
        }
    };

    const ItemGrid = () => {
        return (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {data.slice((page-(itemsPerPage-1))*itemsPerPage,page*itemsPerPage)?.map((item: Post, index: number) => (
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
                <div className="py-5 grid">
                    <div className="flex">
                        <Pagination 
                            currentPage={page} 
                            onPageChange={function (newPage: number): void {
                                setPage(newPage);
                            } } 
                            totalPages={totalPages} 
                        />
                    </div>
                    <p className="flex p-3">
                        Page {page} of {totalPages}.
                    </p>
                </div>
            </div>
        );
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [page]);

    if(loading){
        return (
            <Loading />
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
                        Blog
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {
                props.searchTerm && (
                    <h2 className="px-10">
                        Showing results for: {decodeURIComponent(props.searchTerm || ``)}
                    </h2>
                )
            }
            <div>
                <SearchForm searchTerm={decodeURIComponent(props.searchTerm || ``)} />
            </div>
            <div className="px-3 md:px-10 py-5">
                {
                    data.length === 0 ? (
                        <div role="alert" className="my-5 flex w-full space-x-4 rounded-lg bg-red-50 p-4 ring-1 ring-red-100">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="h-5 w-5 shrink-0 fill-red-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path>
                            </svg>
                            <div className="space-y-1">
                                <h3 className="text-sm font-medium text-red-800">
                                    No Posts Found!
                                </h3>
                                <div className="text-sm text-red-700">
                                    The search term entered did not match any posts in our database.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <ItemGrid />
                    )
                }
            </div>
        </div>
    );
}