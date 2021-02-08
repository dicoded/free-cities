const sveltePreprocess = require("svelte-preprocess");

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
});

module.exports = {
  preprocess,
};
