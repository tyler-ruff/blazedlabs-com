import { useState } from "react";
import { useSession } from "next-auth/react";
import { Comment } from "./Comment";
import  CommentForm  from "../app/CommentForm";
import styles from '../styles/comments.module.css';

import useSWR from 'swr';

export const Comments = ({ postId }) => {
    const { data: session } = useSession();

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`${process.env.SITE_URL}api/comments/${postId}`, fetcher);

    if(error){
        return (
            <div>
                Error
            </div>
        );
    }

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        );
    }

    return !isLoading && (
        <div className={styles.Comments} id="Comments">
            <div className="block comments">
                {data.data.length === 0 ? <div className="alert m-5 select-none">
                        <span>
                            No comments yet. Start the discussion.
                        </span>
                    </div> : <div>
                        {
                            data.data.map((single, index) => {
                                return(
                                    <Comment key={index} body={single.body} authorId={single.authorId} date={single.date} />
                                );
                            })
                        }
                    </div>
                }
            </div>
            <div className="flex comment-form mt-5">
                <div className="avatar w-10 h-10 rounded-full mr-3">
                    {
                        session ? <img title={`Logged in as ${session.user.name}`} className="avatar rounded-full dark:bg-white" src={session.user.image} /> : <div></div>
                    }
                </div>
                <div>
                    {
                        session ? <CommentForm postId={postId} /> : <span className="select-none text-gray-500">You must be logged in to comment.</span>
                    }
                </div>
            </div>
        </div>
    );
}