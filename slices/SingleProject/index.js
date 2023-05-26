import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SingleProjectSlice} SingleProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SingleProjectSlice>} SingleProjectProps
 * @param { SingleProjectProps }
 */
const SingleProject = ({ slice }) => (
  <section>
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
    <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
      <div className="space-y-6">
        <div className="text-4xl font-bold md:tracking-tight md:text-5xl">
            <PrismicRichText field={slice.primary.title}/>
        </div>
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
          <div className="flex items-center md:space-x-2">
            <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
            <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
          </div>
          <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
        </div>
      </div>
      <div className="dark:text-gray-100">
        <p>
          <PrismicRichText field={slice.primary.description}/>
        </p>
      </div>
    </article>
    <div>
      <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
        <a href={slice.primary.repo} target="repo" rel="noopener noreferrer" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">
          Project Repo
        </a>
        <a href={slice.primary.website} target="demo" rel="noopener noreferrer" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">
          View Demo
        </a>
        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">#Angular</a>
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">Related posts</h4>
        <ul className="ml-4 space-y-1 list-disc">
          <li>
            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default SingleProject