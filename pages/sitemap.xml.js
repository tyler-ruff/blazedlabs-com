import { createClient } from "../prismicio";

// Your site's root URL
const EXTERNAL_DATA_URL = "https://blazedlabs.com";

function generateSiteMap(pages, posts, projects) {
	// A helper function to generate the XML string.
	// Customize this to match your site's structure and needs
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     ${pages
       .map(({ uid }) => {
         return `
      <url>
          <loc>${`${EXTERNAL_DATA_URL}/${uid}`}</loc>
      </url>
    `;
       })
       .join("")}
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
     </url>
     ${posts.map(({ uid }) => {
      return `
        <url>
          <loc>${`${EXTERNAL_DATA_URL}/blog/${uid}`}</loc>
        </url>
      `;
     }).join("")}
     <url>
      <loc>${EXTERNAL_DATA_URL}/projects</loc>
     </url>
     ${projects.map(({ uid }) => {
      return `
        <url>
          <loc>${`${EXTERNAL_DATA_URL}/projects/${uid}`}</loc>
        </url>
      `;
     }).join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting and build the XML file.
}

export async function getServerSideProps({ res }) {
  const client = createClient();

  // Fetch data
  const pages = await client.getAllByType("page");
  const posts = await client.getAllByType("blog_post");
  const projects = await client.getAllByType("projects");

  // We generate the XML sitemap with the pages and blog posts data
  const sitemap = generateSiteMap(pages, posts, projects);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;