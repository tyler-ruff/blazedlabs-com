import { IProductCard } from "./data";

export default function ProductCard(props: IProductCard){
    return (
        <a href={props.url} target={props.target} className="block group mx-2 my-2 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition hover:bg-[length:400%_400%] hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 !pt-20 sm:p-6">
                <span className="block text-xs text-gray-500">
                    {props.subtitle}
                </span>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-200 group-hover:underline">
                    {props.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1">
                    {props.tags.map((tag, index) => {
                        return (
                            <span key={index} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </a>
    );
}