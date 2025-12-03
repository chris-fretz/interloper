// Include Eleventy's Markdown parser
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    // Create filter to convert Markdown to HTML
    const md = new markdownIt({
        html: true,
    });
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    // Include images folder in the output
    eleventyConfig.addPassthroughCopy("images");

    // Include Javascript folder in the output
    eleventyConfig.addPassthroughCopy("js");

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