"use client"

import { useEffect, useState } from 'react';
import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';

import ProductCard from "@/components/card/product";
import Loading from '@/app/loading';

export default function Products(){
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any | null>(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'products'));
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
            {data?.map((item: any) => (
              <ProductCard key={item.id} title={item.title} subtitle={item.subtitle} tags={item.tags} url={item.url} target="_blank" />
            ))}
        </div>
      );
    }