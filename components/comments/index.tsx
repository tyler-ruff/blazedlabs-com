import Link from "next/link";
import "./comments.css";
import { IAuthor, IComment } from "./data";
import CommentsMenu from "./menu";

import { useAuthContext } from "@/context/AuthContext";

export default function Comments(){
	const { user } = useAuthContext() as { user: any };
	const Comment = (props: IComment) => {
		return (
            <div className="container flex flex-col w-full max-w-2xl p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
				<div className="flex justify-between p-4">
					<div className="flex space-x-4">
						<div>
							<img src={props.author.picture} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
						</div>
						<div>
							<Link href={`https://blz.ome/usr/${props.author.id}`}>
								<h4 className="font-bold">
									{props.author.name}
								</h4>
							</Link>
							<span className="text-xs text-gray-600">2 days ago</span>
						</div>
					</div>
					<div className="flex items-center space-x-2 text-yellow-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
							<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
						</svg>
						<span className="text-xl font-bold">4.5</span>
					</div>
				</div>
				<div className="p-4 space-y-2 text-sm text-gray-600">
					<p>
						{props.body}
					</p>
				</div>
			</div>
		);
	};
	const CommentForm = () => {
		return (
			<form>
				<div className="flex flex-col items-center w-full">
					<h2 className="text-2xl my-5 font-semibold text-center">
						Leave a Comment
					</h2>
					<div className="flex flex-col w-full">
						<textarea disabled={user ? false : true} placeholder={user ? "Enter comment..." : "You must be logged in to comment..."} className="p-4 rounded-md resize-y text-gray-800 bg-gray-50"></textarea>
						{user && (
							<button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:ring ring-blue-200">
								Submit Comment
							</button>
						)}
					</div>
				</div>
			</form>
		);
	};
    return (
        <div>
			<CommentsMenu />
			<div>
				<Comment id="" author={{
					id: "",
					name: "Blazed Labs",
					picture: "https://blazed.sirv.com/logo/john-mcmahon-ljjcoULkxL8-unsplash_black.png"
				} as IAuthor} body="Hello World" postDate={undefined} />
			</div>
			<div className="flex flex-col max-w-2xl p-8 lg:p-12 bg-gray-50 border-t text-gray-800">
				<CommentForm />
			</div>
        </div>
    );
}