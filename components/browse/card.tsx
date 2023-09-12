import Link from "next/link";

import { IBlogCard } from "./data";

export default function BlogCard(props: IBlogCard){
    const date = new Date(props.created.seconds * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <Link href={`/blog/${props.itemId}`} className="group mx-2 p-4 shadow-md bg-gray-50 text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <span className="block">
                    <h3 className="text-xl font-semibold text-violet-600 group-hover:underline">
                        {props.title}
                    </h3>
                </span>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center text-xs">
                        <time dateTime={date.toISOString()}>
                            {formattedDate}
                        </time>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="leadi text-gray-600">
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}