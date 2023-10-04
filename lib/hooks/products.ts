import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getProducts = async() => {
    try{
        const querySnapshot = await getDocs(collection(db, 'products'));
        const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return documents;
    } catch(error){
        return undefined;
    }
};