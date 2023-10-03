import { Timestamp } from "firebase/firestore";

export interface IBlogCard{
    itemId: string;
    title: string;
    categories: string[];
    created: Timestamp;
    description: string;
}

export interface IBrowseBlog{
    searchTerm?: string;
}

export interface IBrowseBlogTag{
    tag: string;
}

export enum Categories{
    electronics = "Electronics",
    books = "Books",
    furniture = "Furniture",
    clothing = "Clothing",
    food = "Food",
    footwear = "Footwear",
}