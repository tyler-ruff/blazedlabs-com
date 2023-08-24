
import { config } from '@/config/site';
import Logo from '../header/logo';

export default function FullLogo(){
    return (
        <a title={config.name} href="/" className="footer-logo group inline-flex md:flex mt-3 hover:text-gray-700">
            <span className="inline-flex">
                <Logo />
            </span>
            <span className="hidden sm:inline-flex text-xl font-bold dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-400 pl-2 pt-1 select-none">
                {config.name}
            </span>
        </a>
    );
}