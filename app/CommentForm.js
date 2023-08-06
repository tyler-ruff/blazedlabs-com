"use client"

import { useState } from "react";

import styles from '../styles/comments.module.css';

export default function CommentForm({ postId }) {

    const [formData, setFormData] = useState("");

    const handleCommentChange = event => {
        setFormData(event.target.value);
    };

    const submitUrl = `${process.env.SITE_URL}api/comments/${postId}`;
    
    return (
        <form className="flex" method="post" action={submitUrl}>
            <div className="inline-flex form-field">
                <textarea required placeholder="Add a comment..." minLength="3" maxLength="255" name="comment" onChange={handleCommentChange} className={styles.CommentText}></textarea>
            </div>
            <div className="inline-flex form-field">
                <button type="submit" disabled={formData.length === 0 ? true : false} className={styles.SubmitButton}>
                    Submit
                </button>
            </div>
        </form>
    );
}