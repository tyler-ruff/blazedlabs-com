"use client"

import { useEffect, useState } from 'react';
import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Products(){
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
          } catch (error) {
            console.error('Error fetching data from Firestore:', error);
          }
        };
    
        fetchData();
      }, []);
    
      return (
        <div>
          <h1>Data from Firestore</h1>
          <ul>
            {data?.map((item: any) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
    }