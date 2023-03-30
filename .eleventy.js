module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy({ "favicon": "/" });

	return {
		dir: {
			layouts: "_includes/layouts"
		}
	}
};