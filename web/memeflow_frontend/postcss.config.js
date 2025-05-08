// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),           // lets @import work
    require('postcss-custom-variants'),  // transforms @custom-variant …
    require('@tailwindcss/postcss'),     // … before Tailwind expands utilities
    require('autoprefixer'),
  ],
};
