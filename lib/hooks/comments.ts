import { CommentSchema } from "../types/blog";

import { 
    ref, get, push, 
    set, onValue, remove, 
    update 
} from "firebase/database";
import { db, realtime } from "@/lib/firebase";

export const getComments = async(postId: string) => {
    const commentList = [] as CommentSchema[];
    try{
        const commentsRef = ref(realtime, `comments/${postId}`);
        onValue(commentsRef, async (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const rawData = childSnapshot.val();
                const prepData = {
                    ...rawData,
                    key: childSnapshot.ref.key
                } as CommentSchema;
                commentList.push(prepData);
            });
            return commentList;
        });
    } catch(e: any){
        return false;
    }
}