import type { MDXComponents } from 'mdx/types';

import Link from 'next/link';

//import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import { IHeading } from './lib/types/mdx';

/*
const CustomHeadingH1: any = ({ id, ...props }) => {
  if(id){
    return (
      <Link href={`#${id}`}>
        <h1 key={id} id={id} {...props} />
      </Link>
    );
  }
  return <h1 {...props} />;
};
const generateUUID = () => {
  return uuidv4();
};
*/
//id = generateUUID();

function reverseSlugify(slug: string){
    // Replace hyphens with spaces
    let str = slug.replace(/-/g, ' ');

    // Capitalize the first letter of each word
    str = str.replace(/\b\w/g, (match: string) => match.toUpperCase());
  
    return str;
}

let idList = ['blz-app', 'top'];

let createId = (input: any | any[]) => {
  let id = slugify(input, {
    lower: true,
    strict: true
  });
  /*
  if(idList.indexOf(id) === -1){
    idList.push(id);
    return id;
  }
  id = uuidv4();
  idList.push(id);
  */
  return id;
};



const CustomHeading = (props: IHeading) => {
  return (
    <Link href={`#${props.id}`} className={props.size > 1 ? 'no-underline' : 'underline'}>
      {props.children}
    </Link>
  );
};

const Heading1 = ({ ...props }) => {
  const id = createId(props.children);
  const text = props.children;
  return (
    <CustomHeading size={1} id={id}>
      <h1 id={id}>
        {text}
      </h1>
    </CustomHeading>
  );
};

const Heading2 = ({ ...props }) => {
  const id = createId(props.children);
  const text = props.children;
  return (
    <CustomHeading size={2} id={id}>
      <h2 id={id}>
        {text}
      </h2>
    </CustomHeading>
  );
};

const Heading3 = ({ ...props }) => {
  const id = createId(props.children);
  const text = props.children;
  return (
    <CustomHeading size={3} id={id}>
      <h3 id={id}>
        {text}
      </h3>
    </CustomHeading>
  );
};
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,

    ...components,
  }
}