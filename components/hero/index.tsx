import Link from "next/link";

import { IHero } from "./data";

export default function Hero(props: IHero){
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        {props.title}
                    </h1>
                    <p className="py-6">
                        {props.body}
                    </p>
                    <Link target={props.action.target || ``} href={props.action.url}>
                        <button className="self-center px-8 py-3 uppercase font-semibold rounded-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 text-gray-50">
                            {props.action.label}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}