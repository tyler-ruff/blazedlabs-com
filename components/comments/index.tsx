"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Button, Dropdown, Modal, Textarea } from 'flowbite-react';
import { v4 as uuidv4 } from 'uuid';
import { IComment, IComments } from "./data";
import { HiDotsVertical } from "react-icons/hi";
import { CommentSchema } from '@/lib/types/blog';

import { useAuthContext } from "@/context/AuthContext";

import { ref, get, push, set, onValue, remove, update } from "firebase/database";
import { db, realtime } from "@/lib/firebase";
import CommentsMenu from "./menu";
import "./comments.css";
import { timeAgo } from "@/lib/functions";
import Loading from "@/app/loading";
import { Profile } from "@/lib/types/user";
import { getUserProfile } from "@/lib/hooks/users";
import { getComments } from "@/lib/hooks/comments";

export default function Comments(props: IComments){
	const [loading, setLoading] = useState<boolean>(true);
	const [comments, setComments] = useState<CommentSchema[]>();
	const { user } = useAuthContext() as { user: any };

	const loadComments = async() => {
		setLoading(true);
		const commentList = [] as CommentSchema[];
		const commentsRef = ref(realtime, `comments/${props.postId}`);
		onValue(commentsRef, async (snapshot) => {
			snapshot.forEach((childSnapshot) => {
				const rawData = childSnapshot.val();
				//const getProfile = loadProfile(rawData.uid);
				const prepData = {
					...rawData,
					key: childSnapshot.ref.key
				} as CommentSchema;
				commentList.push(prepData);
			});
			setComments(commentList);
			setLoading(false);
		});
	};

	useEffect(() => {
		/*
		const loadComments = async() => {
			const commentList = await getComments(props.postId);
		}
		*/
		loadComments();
	}, []);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		var formData = new FormData(e.target);
		const form_values = Object.fromEntries(formData);
		const postId = form_values.postId;
		push(ref(realtime, `comments/${postId}`), JSON.parse(JSON.stringify({
			id: uuidv4(),
			author: user.uid,
			body: form_values.body,
			posted: new Date().toISOString()
		}))).then(() => {
			loadComments();
		});
	};

	const Comment = (props: IComment) => {
		const [profileData, setProfileData] = useState<any | null>(null);
		const [loadingComment, setLoadingComment] = useState<boolean>(true);
		const [commentError, setCommentError] = useState<string | null>(null);

		useEffect(() => {
			
			const fetchDocument = async () => {
				try{
					const userProfile: any = getUserProfile(props.author).then((data) => {
						setProfileData(data);
						setLoadingComment(false);
					});
					/*
					if(userProfile !== undefined){
						setProfileData(userProfile);
						setLoadingComment(false);
						console.log(userProfile);
						return true;
					}
					*/
				} catch(e: any){
					setCommentError(e.message);
				}
			}
			fetchDocument();
			
			//loadComments();
		}, []);
		/*
		const loadProfile = async (uid: string) => {
				if(!uid) return;
				const fetchData = async() => {
					try {
						const response = await fetch(`/api/profile?id=${uid}`);
						if (!response.ok) {
						  throw new Error(`Error: ${response.statusText}`);
						}
						const result = await response.json();
						setProfileData(result);
						setLoadingComment(false);
					  } catch (err: any) {
						setError(err.message);
					  } finally {
						//return (loadingComments == true) ? null : data;
					  }
				};
				fetchData();
		};

		useEffect(() => {
			loadProfile(props.author);
		}, [])
		*/
		
		const [editComment, setEditComment] = useState<boolean>(false);
		const [commentText, setCommentText] = useState(props.body);
		
		const handleDelete = async() => {
			if(user.uid === props.author){
				remove(ref(realtime, props.refString || ``)).then(() => {
					loadComments();
				});
			}
		};
		const handleCommentEdit = async() => {
			if(user.uid === props.author){
				update(ref(realtime, props.refString || ``), {
					body: commentText
				}).then(() => {
					loadComments();
				});
			}
		};

		const DropDown = () => {
			const [openDeleteModal, setOpenDeleteModal] = useState<string | undefined>();
			return props.author !== user.uid ? (
				<Dropdown
					inline
					label={<HiDotsVertical className="text-gray-800 w-5 h-5" />}
					arrowIcon={false}
					placement="bottom-end"
				>
					<span className="block py-2 px-5 hover:bg-gray-100 cursor-pointer">
						Report Comment
					</span>
				</Dropdown>
			) : (
				<>
					<Dropdown
						inline
						label={<HiDotsVertical className="text-gray-800 w-5 h-5" />}
						arrowIcon={false}
						placement="bottom-end"
					>
						<span className="block py-2 px-5 hover:bg-gray-100 cursor-pointer" onClick={() => setEditComment(true)}>
							Edit
						</span>
						<span className="block py-2 px-5 hover:bg-gray-100 cursor-pointer" onClick={() => setOpenDeleteModal('dismissible')}>
							Delete
						</span>
					</Dropdown>
					<Modal dismissible show={openDeleteModal === 'dismissible'} onClose={() => setOpenDeleteModal(undefined)}>
					<Modal.Header>
						Delete Comment
					</Modal.Header>
					<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							Are you sure you want to delete this comment?
						</p>
					</div>
					</Modal.Body>
					<Modal.Footer>
					<Button color="failure" onClick={() => { setOpenDeleteModal(undefined); handleDelete() }}>
						Delete
					</Button>
					<Button color="gray" onClick={() => setOpenDeleteModal(undefined)}>
						Cancel
					</Button>
					</Modal.Footer>
				</Modal>
				</>
			);
		}

	if(loadingComment){
		return (
			<div role="status" className="w-full max-w-2xl p-6 mx-auto bg-gray-50 dark:bg-gray-800 text-gray-800 animate-pulse">
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
				<span className="sr-only">Loading...</span>
			</div>
		);
	}

	const profile = profileData;

	return commentError == null && (
			<div role="comment" id={props.id} className="container flex flex-col w-full max-w-2xl p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 dark:bg-gray-800 text-gray-800">
				<div className="flex justify-between p-4">
					<div className="flex space-x-4">
						<div>
							<img src={`${profile.avatar}`} 
									alt="User Avatar" 
									className="object-cover w-12 h-12 rounded-full bg-gray-500" 
							/>
						</div>
						<div>
							<Link href={`/profile/${profile.uid}`}>
								<h4 className="font-bold">
									{profile.displayName}
								</h4>
							</Link>
							<span className="text-xs text-gray-600" title="Last Online">
								<time dateTime={props.postDate}>
									{timeAgo(String(props.postDate))}
								</time>
							</span>
						</div>
					</div>
					<div className="flex items-center space-x-2 text-yellow-500">
						{
							user && <DropDown />
						}
					</div>
				</div>
				<div className="p-4 space-y-2 text-sm text-gray-600">
					<div>
						{
							!editComment ? props.body : (
								<form>
									<Textarea 
										defaultValue={commentText} 
										onChange={e => setCommentText(e.target.value)}>
									</Textarea>
									<div className="mt-2 space-x-2">
										<Button onClick={() => handleCommentEdit()} className="inline-flex">
											Update
										</Button>
										<Button onClick={() => setEditComment(false)} color="failure" className="inline-flex">
											Cancel
										</Button>
									</div>
								</form>
							)
						}
					</div>
				</div>
			</div>
		)
	}

	const CommentForm = () => {
		return (
			<div className="flex flex-col items-center w-full dark:bg-gray-800">
				<h2 className="text-2xl my-5 font-semibold text-center">
					Leave a Comment
				</h2>
				<div className="flex flex-col w-full">
					{user ? (
						<form onSubmit={handleSubmit} 
							  className="flex flex-col w-full">
							<textarea 
								required 
								name="body" 
								placeholder="Enter comment..." 
								className="p-4 rounded-md resize-y text-gray-800 bg-gray-50">
							</textarea>
							<input name="postId" type="hidden" value={props.postId} />
							{/*<input name="userId" type="hidden" value={user.uid} />*/}
							<button type="submit" className="py-4 my-4 font-semibold rounded-md text-gray-50 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:ring ring-blue-200">
								Submit Comment
							</button>
						</form>
					) : (
						<div className="block">
							<textarea 
								disabled 
								placeholder="You must be logged in to comment..." 
								className="p-4 rounded-md w-full resize-none text-gray-800 bg-gray-50">
							</textarea>
						</div>
					)}
				</div>
			</div>
		);
	};

	const CommentList = () => {
		if(loading){
			return (
				<span className="loading loading-dots loading-lg"></span>
			);
		}
		if(comments?.length === 0){
			return (
				<div className="alert">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					<span>
						No comments yet.&nbsp;
						{user && (
							<span>
								Be the first to post a comment.
							</span>
						)}
					</span>
				</div>
			);
		}
		return (
			comments && comments.map((comment: CommentSchema, index: number) => {
					return (
						<li key={index}>
							{
								loading && <Loading />
							}
							{
								!loading && <Comment
									refString={`comments/${props.postId}/${comment.key}`}
									id={comment.id}
									author={comment.author}
									body={comment.body} 
									postDate={new Date(comment.posted).toISOString()} 
								/>
							}
						</li>
					)
			})
		)

	};

    return (
        <div id="comments">
			<CommentsMenu />
			<div className="py-5">
				<ul>
					<CommentList />
				</ul>
			</div>
			<div className="flex flex-col max-w-2xl p-8 lg:p-12 bg-gray-50 dark:bg-gray-800 border-t text-gray-800">
				<CommentForm />
			</div>
        </div>
    );
}