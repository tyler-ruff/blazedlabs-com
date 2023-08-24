import { Brand, Config, Social } from "@/util/site";

const config = {
    name: "Blazed Labs",
    fbAppId: "",
    description: "Main website for Blazed Labs. We turn dreams into reality."
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "Blazed Labs LLC",
    twitter: "@BlazedLabs",
    email: "hello@blazed.space",
    telephone: "+18557882348"
} as Brand;

export {
    config, brand, social
};