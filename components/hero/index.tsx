import Link from "next/link";

import { IHero } from "./data";

export default function Hero(props: IHero){
    return (
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold bold-title">
                        {props.title}
                    </h1>
                    <p className="py-6">
                        {props.body}
                    </p>
                    <Link target={props.action.target || ``} href={props.action.url}>
                        <button className="self-center px-8 py-3 uppercase font-semibold rounded-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400 text-gray-50">
                            {props.action.label}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}