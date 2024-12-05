import { db } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const getUserProfile = async(uid: string) => {
    try{
        const docRef = doc(db, "profiles", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            //console.log("No such document!");
            return null;
        }
    } catch (e) {
        //console.log("Error getting cached document:", e);
        return null;
    }
};