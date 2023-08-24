import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

import { social } from '@/config/site';

export default function Social(){
    return (
        <div className="mt-6 mb-4 sm:my-0 inline-flex space-x-6 sm:mt-0 sm:justify-center footer-icons">
            <Footer.Icon
                href={social.facebook}
                target="social"
                icon={BsFacebook}
            />
            <Footer.Icon
                href={social.instagram}
                target="social"
                icon={BsInstagram}
            />
            <Footer.Icon
                href={social.twitter}
                target="social"
                icon={BsTwitter}
            />
            <Footer.Icon
                href={social.github}
                target="social"
                icon={BsGithub}
            />
      </div>
    )
}