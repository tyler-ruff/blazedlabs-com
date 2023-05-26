import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";

import { useRouter } from 'next/router';

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
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicLink href="/" className="hidden md:block text-xl font-semibold tracking-tight">
          <img priority="true" className="md:pt-10 hover:opacity-75" title="Blazed Labs" src="https://blazed.sirv.com/logo/Beaker-Dark.png?w=50&h=50"/>
        </PrismicLink>
        <nav className="hidden md:block">
          <ul className="flex flex-wrap gap-6 md:gap-10 mb-12">
            {navigation.data?.links.map((item) => (
              <li key={prismicH.asText(item.label)}>
                <PrismicLink className="hover:underline" field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
        <PrismicLink href="/" className="block md:hidden text-xl font-semibold tracking-tight">
          <img priority="true" className="pt-5 pl-3 hover:opacity-75" title="Blazed Labs" src="https://blazed.sirv.com/logo/Beaker-Dark.png?w=35&h=35"/>
        </PrismicLink>
        <nav className="block md:hidden mt-2">
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
      <div id="mobile-menu" className="hidden">
        <ul className="block md:hidden menu bg-base-100 w-full pt-5">
              {navigation.data?.links.map((item) => (
                <li key={prismicH.asText(item.label)}>
                  <PrismicLink className="hover:underline" field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              ))}
        </ul>
      </div>
    </Bounded>
  );
};
