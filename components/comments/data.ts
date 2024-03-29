export interface IAuthor{
    id: string;
    name: string;
    picture: string;
}

export interface IComment{
    id: string;
    author: IAuthor;
    body: string;
    postDate: string;
    refString: string;
}

export interface IComments{
    postId: string;
}