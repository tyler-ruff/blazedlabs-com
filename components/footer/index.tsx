'use client';

/**
 * Footer component
 * @function
 * @returns JSX
 */

import { Footer } from 'flowbite-react';

import { formatPhoneNumber } from '@/util/format';

import { brand } from '@/config/site';
import { footerMenu } from '@/config/menu';

import FullLogo from './logo';
import Social from './social';

import './footer.css';


export default function BlzFooter() {
  const year = new Date().getFullYear();
  return (
    <Footer container className="rounded-none text-center md:text-left">
      <div className="w-full px-2">
        <div className="sm:grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 px-1">
          <div>
            <FullLogo />
            <div className="footer-contact hidden md:block pt-4 pl-4 text-sm">
              <p>
                <span className="mr-1 text-gray-500 select-none">
                  Phone:
                </span>
                <a href={`tel:` + brand.telephone} title="Call or Text Us" className="inline-flex">
                  {formatPhoneNumber(brand.telephone || ``)}
                </a>
              </p>
              <p>
                <span className="mr-1 text-gray-500 select-none">
                  Email:
                </span>
                <a href={`mailto:` + brand.email} title="Email Us" className="inline-flex">
                  {brand.email}
                </a>
              </p>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 select-none">
            <div>
              <Footer.Title title={footerMenu.one[0].label} />
              <Footer.LinkGroup col>
                {footerMenu.one.map(
                  (item, index) => {
                    if(item.href !== undefined && item.href !== null){
                      return (
                        <Footer.Link href={item.href} key={index}>
                          {item.label}
                        </Footer.Link>
                      );
                    }
                  }
                )}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={footerMenu.two[0].label} />
              <Footer.LinkGroup col>
              {footerMenu.two.map(
                  (item, index) => {
                    if(item.href !== undefined && item.href !== null){
                      return (
                        <Footer.Link href={item.href} key={index}>
                          {item.label}
                        </Footer.Link>
                      );
                    }
                  }
                )}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={footerMenu.three[0].label} />
              <Footer.LinkGroup col>
                {footerMenu.three.map(
                  (item, index) => {
                    if(item.href !== undefined && item.href !== null){
                      return (
                        <Footer.Link href={item.href} key={index}>
                          {item.label}
                        </Footer.Link>
                      );
                    }
                  }
                )}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between select-none">
          <Footer.Copyright
            by={brand.company || ``}
            href="https://blazed.company/"
            year={year}
          />
          <Social />
        </div>
      </div>
    </Footer>
  )
}


