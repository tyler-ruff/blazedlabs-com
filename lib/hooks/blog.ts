import { db } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const getBlogPosts = async() => {
    try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    return documents;
    } catch (error) {
        return undefined;
    }
};

export const getSinglePost = async(postId: string) => {
    try{
        const docRef = doc(db, 'posts', postId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            return docSnapshot.data();
        } else {
            return undefined;
        }
    } catch (error){
        return undefined;
    }
}
