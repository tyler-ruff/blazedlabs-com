"use client"

import { useEffect, useState } from 'react';

import Loading from '@/app/loading';

import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';

import BlogCard from "./card";
import { Post } from '@/lib/types/blog';

export default function BrowseBlog(){
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any | null>(null);
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
    );
}