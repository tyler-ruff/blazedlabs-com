import { useState, useRef, useEffect } from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { useRouter } from 'next/router';
import { useWindowSize } from "@uidotdev/usehooks";

import { Logo } from "./Logo";
import { Burger } from "./Burger";

import ThemeSwitch from "./../app/ThemeSwitch";
import AuthMenuDesktop from "../app/Menu/AuthMenuDesktop";
import AuthMenuMobile from "../app/Menu/AuthMenuMobile";

import { extendedMenu } from "../lib/extendedMenu";

import styles from "./../styles/header.module.css";

export const Header = ({ navigation, settings }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mobileNav = useRef(null);

  const router = useRouter();
  const size = useWindowSize();
  
  const toggleBurger = async() =>{
    //const drawer = document.querySelector('.drawer-toggle');
    if(!isExpanded){
      setIsExpanded(true);
      //document.getElementById('mobile-menu').classList.remove('hidden');
      //mobileMenuAside.current.classList.remove('hidden');
      //mobileNav.current.style.background = "red";
      mobileNav.current.classList.add('expanded');
      document.body.style.overflowY = "hidden";
    } else {
      setIsExpanded(false);
      //document.getElementById('mobile-menu').classList.add('hidden');
      mobileNav.current.classList.remove('expanded');
      document.body.style.overflowY = "scroll";
    }
  };

  // Fix for switching between mobile -> desktop w/ menu expanded
  useEffect(() => {
    if(size.width >= 767){
      document.body.style.overflowY = "scroll";
      if(isExpanded){
        setIsExpanded(false);
        document.getElementById('burger-status').checked = false;
      }
    }
  }, [size.width]);

  // Prevent scroll lock on navigate
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, [router.query]);

  const siteName = prismicH.asText(settings.data.siteTitle);

  return (
    <div className={`${styles.header} sticky dark:bg-gray-900`}>
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 leading-none">
        <nav className={`hidden md:flex navbar justify-between transition-all ease-in-out ${styles.nav} dark:${styles.navDark}`}>
        <PrismicLink href="/" className="hidden md:inline-block text-xl font-semibold tracking-tight">
            <Logo siteName={siteName} />
          </PrismicLink>
          <div className="hidden md:inline-block mt-5 pt-6 dark:text-white">
            <ul className="flex flex-wrap gap-6 md:gap-10 mb-12 pt-2">
              {navigation.data?.links.map((item, index) => (
                <li key={index}>
                  <PrismicLink className={router.asPath == item.uid ? styles.active : styles.MenuLink} field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              ))}
              {extendedMenu.map((item, index) => (
                <li key={index}>
                  <PrismicLink className={router.asPath == item.uid ? styles.active : styles.MenuLink} href={item.href}>
                    {item.label}
                  </PrismicLink>
                </li>
              ))}
              <li className="p-1" key="theme-desktop">
                <ThemeSwitch />
              </li>
              <li key="auth-desktop">
                <AuthMenuDesktop />
              </li>
            </ul>
          </div>
        </nav>
        <nav ref={mobileNav} className="navbar bg-gray-300 dark:bg-gray-700 justify-between md:hidden pb-7">
          <PrismicLink href="/" className="inline-block md:hidden text-xl font-semibold tracking-tight">
            <Logo />
          </PrismicLink>
          <div onClick={toggleBurger} className="inline-block mt-7 mr-2">
            <Burger active={isExpanded} />
          </div>
        </nav>
      </div>
      <aside className={`${styles.navMenuMobile} mobile-menu ${isExpanded ? styles.expanded : ''}`}>
          <div className={styles.MobileMenu}>
            <ul className="h-screen md:hidden menu dark:bg-gray-800 dark:text-gray-300 w-full border-t dark:border-gray-600">
                {navigation.data?.links.map((item) => (
                  <li className="block" key={prismicH.asText(item.label)}>
                    <PrismicLink className={router.asPath == item.uid ? `${styles.ActiveMobile} active-mobile dark:bg-gray-900` : `${styles.MobileMenuItem} dark:hover:bg-gray-900`} field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicLink>
                  </li>
                ))}
                {extendedMenu.map((item) => (
                  <li className="block" key={item.label}>
                    <PrismicLink className={router.asPath == item.uid ? `${styles.ActiveMobile} active-mobile dark:bg-gray-900` : `${styles.MobileMenuItem} dark:hover:bg-gray-900`} href={item.href}>
                      {item.label}
                    </PrismicLink>
                  </li>
                ))}
                <li className="place-content-center py-3" key="theme-mobile">
                  <ThemeSwitch />
                </li>
                <li className="transition-none" key="auth-mobile">
                  <AuthMenuMobile />
                </li>
            </ul>
          </div>
        </aside>
    </div>
  );
};
