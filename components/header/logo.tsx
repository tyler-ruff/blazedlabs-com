import Image from "next/image";
import Link from "next/link";

import { ILogo } from "./data";

/**
 * Logo component
 * @param prop title <string>
 * @example <Logo title={config.title} />
 * @returns JSX Component
 */
const Logo = (props: ILogo) => {
    return (
        <a href="/" 
            aria-label="Back to homepage"
            title={props.title} 
            className="flex items-center p-2 hover:opacity-75 select-none">
            <Image 
                src="/images/beaker-cobalt.png" 
                width={40} 
                height={40} 
                alt="Logo"
                className="dark:hidden"
            />
            <Image 
                src="/images/beaker-white.png" 
                width={40} 
                height={40} 
                alt="Logo" 
                className="hidden dark:block"
            />
        </a>
    );
}

export default Logo;