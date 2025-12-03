// Include Eleventy's Markdown parser
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    // Posts collection
    // eleventyConfig.addCollection("posts", function(collectionApi) {
    //     return collectionApi.getFilteredByGlob("src/posts/*.md")
    //     .sort((a, b) => b.date - a.date); // Newest first
    // });

    // Create filter to convert Markdown to HTML
    const md = new markdownIt({
        html: true,
    });
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    // Include images folder in the output
    eleventyConfig.addPassthroughCopy("images");
    
    // Define directory structure
    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            data: "_data", 
        }
    }
}