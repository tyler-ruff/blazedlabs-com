import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";

import { useRouter } from 'next/router';
import { ThemeSwitch } from "./ThemeSwitch";

import { Logo } from "./Logo";

export const Header = ({ navigation, settings }) => {
  const router = useRouter();
  const toggleBurger = () =>{
    if(document.getElementById('burger-status').checked){
      document.getElementById('mobile-menu').classList.remove('hidden');
    } else {
      document.getElementById('mobile-menu').classList.add('hidden');
    }
  };

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 leading-none">
        <div className="hidden md:flex navbar justify-between">
          <PrismicLink href="/" className="hidden md:inline-block text-xl font-semibold tracking-tight">
            <Logo />
          </PrismicLink>
          <nav className="hidden md:inline-block mt-5 pt-5 dark:text-white">
            <ul className="flex flex-wrap gap-6 md:gap-10 mb-12 pt-2">
              {navigation.data?.links.map((item) => (
                <li key={prismicH.asText(item.label)}>
                  <PrismicLink className={router.asPath == item.uid ? "underline" : "hover:underline"} field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              ))}
              <li key="blog">
                <PrismicLink className={router.asPath == "/blog" ? "underline" : "hover:underline"} href="/blog">
                  Blog
                </PrismicLink>
              </li>
              <li key="theme">
                <ThemeSwitch />
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar bg-gray-200/40 dark:bg-gray-700 justify-between md:hidden pb-7">
          <PrismicLink href="/" className="inline-block md:hidden text-xl font-semibold tracking-tight">
            <Logo />
          </PrismicLink>
          <nav className="inline-block md:hidden mt-7 mr-2">
            <label onClick={toggleBurger} className="swap swap-rotate">
              <input type="checkbox" id="burger-status" />
              <svg className="swap-off fill-current w-10 h-10" width="60" height="60" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.5 13.5A.5.5 0 015 13h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 9h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 5h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
              </svg>
              <svg className="swap-on fill-current w-10 h-10" width="60" height="60" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M14.354 5.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clipRule="evenodd"/>
              </svg>
            </label>
          </nav>
        </div>
      </div>
      <div id="mobile-menu" className="hidden grid">
        <ul className="h-screen md:hidden menu pt-10 bg-base-100 dark:bg-gray-800 dark:text-gray-300 w-full border-t">
            {navigation.data?.links.map((item) => (
              <li className="block" key={prismicH.asText(item.label)}>
                <PrismicLink className={router.asPath == item.uid ? "px-6 bg-gray-100 dark:bg-gray-900" : "px-6 hover:bg-gray-100 dark:hover:bg-gray-900"} field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
            <li className="block" key="blog">
              <PrismicLink className={router.asPath == "/blog" ? "px-6 bg-gray-100 dark:bg-gray-900" : "px-6 hover:bg-gray-100 dark:hover:bg-gray-900"} href="/blog">
                Blog
              </PrismicLink>
            </li>
            <li className="place-content-center" key="theme">
              <ThemeSwitch />
            </li>
        </ul>
      </div>
    </Bounded>
  );
};
