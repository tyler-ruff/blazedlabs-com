import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";

import { useRouter } from 'next/router';

import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { ThemeSwitch } from "./ThemeSwitch";

import styles from "./../styles/header.module.css";

export const Header = ({ navigation, settings }) => {
  const router = useRouter();

  const extendedMenu = [
    {
      uid: "/blog",
      label: "Blog",
      href: "/blog"
    }
  ];

  const toggleBurger = () =>{
    if(document.getElementById('burger-status').checked){
      document.getElementById('mobile-menu').classList.remove('hidden');
    } else {
      document.getElementById('mobile-menu').classList.add('hidden');
    }
  };

  return (
    <Bounded as="header" className={styles.header} yPadding="sm">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 leading-none">
        <div className="hidden md:flex navbar justify-between">
          <PrismicLink href="/" className="hidden md:inline-block text-xl font-semibold tracking-tight">
            <Logo />
          </PrismicLink>
          <nav className="hidden md:inline-block mt-5 pt-5 dark:text-white">
            <ul className="flex flex-wrap gap-6 md:gap-10 mb-12 pt-2">
              {navigation.data?.links.map((item) => (
                <li key={item.label}>
                  <PrismicLink className={router.asPath == item.uid ? styles.active : "hover:underline"} field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              ))}
              {extendedMenu.map((item) => (
                <li key={item.label}>
                  <PrismicLink className={router.asPath == item.uid ? styles.active : "hover:underline"} href={item.href}>
                    {item.label}
                  </PrismicLink>
                </li>
              ))}
              <li key="theme">
                <ThemeSwitch />
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar bg-gray-300/40 dark:bg-gray-700 justify-between md:hidden pb-7">
          <PrismicLink href="/" className="inline-block md:hidden text-xl font-semibold tracking-tight">
            <Logo />
          </PrismicLink>
          <nav onClick={toggleBurger} className="inline-block mt-7 mr-2">
            <Burger />
          </nav>
        </div>
      </div>
      <aside id="mobile-menu" className="hidden">
          <div>
            <ul className="h-screen md:hidden menu bg-base-100 dark:bg-gray-800 dark:text-gray-300 w-full border-t dark:border-gray-600">
                {navigation.data?.links.map((item) => (
                  <li className="block" key={prismicH.asText(item.label)}>
                    <PrismicLink className={router.asPath == item.uid ? "px-6 bg-gray-100 dark:bg-gray-900" : "px-6 hover:bg-gray-100 dark:hover:bg-gray-900"} field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicLink>
                  </li>
                ))}
                {extendedMenu.map((item) => (
                  <li className="block" key={item.label}>
                    <PrismicLink className={router.asPath == item.uid ? "px-6 bg-gray-100 dark:bg-gray-900" : "px-6 hover:bg-gray-100 dark:hover:bg-gray-900"} href={item.href}>
                      {item.label}
                    </PrismicLink>
                  </li>
                ))}
                <li className="place-content-center" key="theme">
                  <ThemeSwitch />
                </li>
            </ul>
          </div>
        </aside>
    </Bounded>
  );
};
