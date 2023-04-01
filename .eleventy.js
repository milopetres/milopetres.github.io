module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy({ "favicon": "/" });
	eleventyConfig.addPassthroughCopy("admin");

	return {
		dir: {
			layouts: "_includes/layouts"
		}
	}
};
