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
    
    // Define directory structure
    return {
        dir: {
            input: "src",
            includes: "../_includes",
            output: "public"
        }
    }
}