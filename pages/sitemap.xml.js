import { createClient } from "../prismicio";

// Your site's root URL
const EXTERNAL_DATA_URL = "https://blazedlabs.com";

function generateSiteMap(pages) {
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
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting and build the XML file.
}

export async function getServerSideProps({ res }) {
  const client = createClient();

  // We fetch our pages first
  const pages = await client.getAllByType("page");

  // We generate the XML sitemap with the pages and blog posts data
  const sitemap = generateSiteMap(pages);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;