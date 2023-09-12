import { Timestamp } from "firebase/firestore";

export interface IBlogCard{
    itemId: string;
    title: string;
    categories: string[];
    created: Timestamp;
    description: string;
}