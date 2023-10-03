import { Timestamp } from "firebase/firestore";

export interface IAuthor{
    id: string;
    name: string;
    picture: string;
}

export interface IComment{
    id: string;
    author: IAuthor;
    body: string;
    postDate: Timestamp | undefined;
}