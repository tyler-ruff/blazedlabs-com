import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="text-3xl font-extrabold text-gray-300/80 sm:text-5xl mb-5">
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-slate-900 text-white">
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt="Hero Image"
          fill={true}
          priority="true"
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center text-2xl">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          {prismicH.isFilled.link(slice.primary.buttonLink) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded inline-block px-12 py-3 mt-3 text-sm font-medium text-white border bg-blue-600/75 border-indigo-600 rounded-full hover:bg-blue-800 hover:text-white focus:outline-none focus:ring active:bg-blue-900"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
