import { db, storage } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc, DocumentData } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

export const getUserAvatars = async(uid: string) => {
    let avatars: string[] = [];
    try{
        const listRef = ref(storage, `profile_pictures/${uid}`);
        listAll(listRef).then((res) => {
            if(res.items.length === 0){
                avatars.push(`https://blazedlabs.com/api/og/avatar?title=US`);
                return avatars;
            }
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    avatars.push(url);
                });
            });
        });
        return avatars;
    } catch (e: any) {
        return null;
    }
}

export const getUserAvatar = async(uid: string, size: { width: number, height: number } = { width: 50, height: 50 }, fileType = "png") => {
    const userProfile = await getUserProfile(uid);
    if(userProfile !== null){
        const avatarRef = ref(storage, `profile_pictures/${uid}/${userProfile.avatar}_${size.width}x${size.height}.${fileType}`);
        return await getDownloadURL(avatarRef);
    }
    return "/api/og/avatar/default";
}

export const getUserProfile = async(uid: string) => {
    try{
        const docRef = doc(db, "profiles", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
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