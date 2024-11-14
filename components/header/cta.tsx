import Link from 'next/link';

import { ICta } from './data';

export function Cta(props: ICta){
    return (
        <Link 
            aria-label={props.label}
            href={props.url}
            className="hidden lg:flex self-center px-8 py-3 font-semibold rounded-full bg-primary dark:bg-gray-200 hover:bg-blue-800 dark:hover:bg-gray-400 active:bg-blue-900 text-gray-50 dark:text-gray-800 dark:hover:text-gray-900 focus:outline-none focus:ring focus:ring-blue-400 dark:focus:ring-white select-none">
            {props.label}
        </Link>
    );
}