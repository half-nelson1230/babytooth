const path = require('path')
const linkResolver = require('./src/templates/utilities/linkResolver')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "bb2th_gatsby",
  },
  plugins: [
    {
 resolve: 'gatsby-source-prismic',
 options: {
   repositoryName: 'babytooth',
   prismicToolbar: true,
   linkResolver: () => (doc) => linkResolver(doc),
   schemas: {
      album: require('./custom_types/album.json'),
      homepage: require('./custom_types/homepage.json'),
      shows: require('./custom_types/shows.json'),
      photos: require('./custom_types/photos.json'),
   },
   },
 },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
     resolve: "gatsby-plugin-web-font-loader",
     options: {
       typekit: {
         id: 'cel3mzq',
       },
     },
   },
  ],
};
