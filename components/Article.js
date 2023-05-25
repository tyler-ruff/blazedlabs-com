import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import { getExcerpt } from "../lib/getExcerpt";
import { findFirstImage } from "../lib/findFirstImage";
import { dateFormatter } from "../lib/dateFormatter";
import { Heading } from "../components/Heading";

export const blog_post = ({ blog_post }) => {
  const featuredImage =
    (prismicH.isFilled.image(blog_post.data.featuredImage) &&
      blog_post.data.featuredImage) ||
    findFirstImage(blog_post.data.slices);
  const date = prismicH.asDate(
    blog_post.data.publishDate || blog_post.first_publication_date
  );
  const excerpt = getExcerpt(blog_post.data.slices);

  return (
    <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
      <PrismicLink document={blog_post} tabIndex="-1">
        <div className="aspect-w-4 aspect-h-3 relative bg-gray-100">
          {prismicH.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              fill={true}
              className="object-cover"
            />
          )}
        </div>
      </PrismicLink>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <Heading as="h2">
          <PrismicLink document={blog_post}>
            <PrismicText field={blog_post.data.title} />
          </PrismicLink>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};