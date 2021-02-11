/* eslint-env node */
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: "/",
		src: "/_dist_",
	},
	plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-webpack"],
	packageOptions: {
		types: true,
	},
	devOptions: {
		port: 8000,
	},
	buildOptions: {
		out: "build",
		sourcemap: true,
	},
	alias: {
		"~": "./src",
		"~/public": "./public",
		"components": "./src/components",
		"classes": "./src/ts/classes",
		"util": "./src/ts/util",
		"stores": "./src/stores",
		"extensions": "./src/ts/util/extensions",
	},
};
