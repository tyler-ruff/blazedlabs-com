"use client"

import { useState } from "react";

export default function CommentForm({ postId }) {

    const [formData, setFormData] = useState("");

    const handleCommentChange = event => {
        setFormData(event.target.value);
    };

    const submitUrl = `${process.env.SITE_URL}api/comments/${postId}`;
    
    return (
        <form className="flex" method="post" action={submitUrl}>
            <div className="inline-flex form-field">
                <textarea minLength="3" maxLength="255" required name="comment" onChange={handleCommentChange} className="input input-bordered border-r-0 input-primary w-full max-w-xs rounded-l-full resize-none dark:bg-gray-500/40"></textarea>
            </div>
            <div className="inline-flex form-field">
                <button type="submit" disabled={formData.length === 0 ? true : false} className="btn btn-active rounded-r-full">
                    Submit
                </button>
            </div>
        </form>
    );
}