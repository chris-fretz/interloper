// Include Eleventy's Markdown parser
const markdownIt = require("markdown-it");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    // Create filter to convert Markdown to HTML
    const md = new markdownIt({
        html: true,
    });
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    // Add Eleventy image processing to build process
    eleventyConfig.addPlugin(eleventyImageTransformPlugin,{
        formats: ["webp"],
        widths: ["auto"],
        htmlOptions: {
			imgAttributes: {
				// e.g. <img loading decoding> assigned on the HTML tag will override these values.
				loading: "lazy",
				decoding: "async",
			}
		},
    }    );

    // Include images folder in the output
    eleventyConfig.addPassthroughCopy("src/images");

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