import { Brand, Config, Social } from "@/lib/types/app";

const url = process.env.NODE_ENV === "development" ? 
'http://localhost:3000' : 'https://blazedlabs.com';

const config = {
    name: "Blazed Labs",
    fbAppId: "503698127531557",
    description: "We turn Dreams into Reality!"
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs",
    linkedin: "https://www.linkedin.com/company/blazed-labs/"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "Blazed Labs LLC",
    email: "hello@blazed.space",
    telephone: "+18557882348",
    address: "1650 Simpson Ave, Ocean City, NJ 08226"
} as Brand;

export {
    config, brand, social, url
};