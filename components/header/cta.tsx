import Link from 'next/link';

import { ICta } from './data';

export function Cta(props: ICta){
    return (
        <Link 
            aria-label={props.label}
            href={props.url}
            className="hidden lg:flex self-center px-8 py-3 font-semibold rounded-full bg-primary hover:bg-blue-800 active:bg-blue-900 text-gray-50 focus:outline-none focus:ring focus:ring-blue-400 select-none">
            {props.label}
        </Link>
    );
}