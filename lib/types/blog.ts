import { Timestamp } from 'firebase/firestore';

export interface Post {
    id: string,
    title: string,
    description: string,
    image: string,
    tags: string[],
    text: string,
    categories: string[],
    created_on: Timestamp,
}

export interface CommentSchema {
    key: string;
    id: string;
    author: string;
    posted: string;
    body: string;
}