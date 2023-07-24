import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { getExcerpt } from "../lib/getExcerpt";
import { dateFormatter } from "../lib/dateFormatter";
import  readingTime  from "../lib/readingTime";

export const ArticleCard = ({ article }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(prismicH.asText(article.data.content));
  return (
      <PrismicLink href={"/blog/" + article.uid} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:bg-gray-50 dark:hover:bg-gray-900">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:from-gray-700 dark:via-blue-900 dark:to-gray-800 dark:to-gray-800"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-gray-200">
                    <PrismicText field={article.data.title} />
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                    In <b>{article.data.category}</b>
                </p>
            </div>
        </div>

        <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500 dark:text-gray-400">
                {excerpt}
            </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Published
                </dt>
                <dd className="text-xs text-gray-500">
                    <time>
                        {dateFormatter.format(date)}
                    </time>
                </dd>
            </div>

            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
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