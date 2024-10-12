import { IErrorPage } from "./data";

export default function Error(props: IErrorPage){
    return (
        <div role="alert" className="grid h-screen px-4 bg-white dark:bg-gray-700 place-content-center">
            <div className="text-center select-none">
                <h1 className="font-black dark:text-gray-200 text-9xl drop-shadow-md">
                    {props.code}
                </h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                    {props.title}
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-300 py-5 pb-8">
                    {props.description}
                </p>
                <a href="/" className="inline-block px-8 py-3 font-semibold rounded-full bg-primary hover:bg-blue-800 active:bg-blue-900 text-gray-50 focus:outline-none focus:ring focus:ring-blue-400 select-none">
                    Go Back Home
                </a>
            </div>
        </div>
    )
}