/**
 * Single menu item
 * @interface
 * @prop label Text label          <string>
 * @prop href URL to open          <string>     [optional]
 * @prop submenu For dropdowns     <MenuItem[]> [optional]
 */
export interface MenuItem{
    label: string;
    href?: string;
    submenu?: MenuItem[];
}

/**
 * Types for menus
 * @interface
 * @prop _id Unique menu ID         <string>
 * @prop nav List of main nav items <MenuItem[]>
 */
export interface Menu {
    _id: string;
    nav: MenuItem[];
}

/**
 * Social config settings
 * @interface
 * @prop facebook URL
 * @prop instagram URL
 * @prop github URL
 * @prop twitter URL
 */
export interface Social {
    facebook?: string;
    instagram?: string;
    github?: string;
    twitter?: string;
}

/**
 * Brand personalization settings for site
 * @interface
 * @prop logo Company/Site logo (as URL)<string>
 * @prop company Company name           <string> [optional]
 * @prop twitter Site Twitter handle    <string> [optional]
 * @prop email Company/site email       <string> [optional]
 * @prop telephone Company/site phone   <string> [optional]
 */
export interface Brand {
    logo: string;
    company?: string;
    twitter?: string;
    email?: string;
    telephone?: string;
}

/**
 * This interface defines the config options for a Fire site.
 * @interface
 * @prop name Site name
 * @prop fbAppId Site Facebook app id   <string> [optional]
 * @prop description Site description   <string> [optional]
 */
export interface Config {
    name: string;
    fbAppId?: string;
    description?: string;
}