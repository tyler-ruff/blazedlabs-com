import algoliasearch from 'algoliasearch/lite';

const algoliaClient = algoliasearch(process.env.ALGOLIA_APP_ID || "", process.env.ALGOLIA_API_KEY || "");

//Index for blog
const blogSearchIndex = algoliaClient.initIndex(process.env.ALGOLIA_INDEX || "");

export default blogSearchIndex;
