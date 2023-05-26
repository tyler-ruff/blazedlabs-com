import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { getExcerpt } from "../lib/getExcerpt";
import { dateFormatter } from "../lib/dateFormatter";
import  readingTime  from "../lib/readingTime";

export const Article = ({ article }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(prismicH.asText(article.data.content));
  return (
      <PrismicLink href={"/blog/" + article.uid} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:bg-gray-50">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    <PrismicText field={article.data.title} />
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                    In <b>{article.data.category}</b>
                </p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
            </div>
        </div>

        <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">
                {excerpt}
            </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                    Published
                </dt>
                <dd className="text-xs text-gray-500">
                    <time>
                        {dateFormatter.format(date)}
                    </time>
                </dd>
            </div>

            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                    Reading Time
                </dt>
                <dd className="text-xs text-gray-500">
                    {readingTime(prismicH.asText(article.data.content))}
                </dd>
            </div>
        </dl>
    </PrismicLink>
  );
};