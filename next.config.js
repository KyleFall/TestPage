
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['fk3Bc9B9VVJoJaPi3EE6g8'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  