import Link from "next/link";

import { IBlogCard } from "./data";

export default function BlogCard(props: IBlogCard){

    const TimeCreated = () => {
        const date = new Date(props.created.seconds * 1000);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return (
            <div className="space-y-2">
                <div className="flex items-center text-xs dark:text-gray-200">
                    <time dateTime={date.toISOString()}>
                        {formattedDate}
                    </time>
                </div>
            </div>
        );
    }

    return (
        <Link href={`/blog/${props.itemId}`} className="group mx-2 p-4 shadow-md bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <span className="block">
                    <h3 className="text-xl font-semibold text-violet-600 dark:text-white group-hover:underline">
                        {props.title}
                    </h3>
                </span>
            </div>
            <div className="space-y-4">
                {
                    props.created && (
                        <TimeCreated />
                    )
                }
                <div className="space-y-2">
                    <p className="leadi text-gray-600 dark:text-gray-300">
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}