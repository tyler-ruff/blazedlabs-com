import * as prismicH from "@prismicio/helpers";

export const getExcerpt = (data) => {
  const text = data;

  const excerpt = text.substring(0, 180);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};