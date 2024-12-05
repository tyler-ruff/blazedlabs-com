import { CommentSchema } from "@/lib/types/blog";

export interface IComment{
    id: string;
    author: string;
    body: string;
    postDate: string;
    refString: string;
}

export interface IComments{
    postId: string;
}