const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('src/templates/product.js');

    resolve(
      graphql(
        `
        {
          allContentfulProduct {
            edges {
              node {
                slug
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors) {
          reject(result.errors);
        }

        const products = result.data.allContentfulProduct.edges;

        products.forEach(({ node }, index) => {
          createPage({
            path: `shop/${node.slug}`,
            component: productTemplate,
            context: {
              slug: node.slug
            }
          });
        });
      })
    )
  })
};