module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    return {
        dir: {
            input: "src",
            includes: "../_includes",
            output: "public"
        }
    }
}