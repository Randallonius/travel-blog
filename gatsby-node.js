
const _ = require('lodash')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.node$/,
          use: 'node-loader',
        },
      ],
    },
  })
}

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.js')
  const categoryTemplate = require.resolve('./src/templates/category.js')
  const tagTemplate = require.resolve('./src/templates/tag.js')
  const authorTemplate = require.resolve('./src/templates/author.js')

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
                categories {
                  category {
                    document {
                      ... on PrismicCategory {
                        id
                      }
                    }
                  }
                }
                tags {
                  tag {
                    document {
                      ... on PrismicTag {
                        data {
                          name
                        }
                      }
                    }
                  }
                }
                author_group {
                  author {
                    document {
                      ... on PrismicAuthor {
                        data {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  )

  const authorSet = new Set()
  const categorySet = new Set()
  const tagSet = new Set()
  const postsList = result.data.allPrismicPost.edges

  // Double check that the post has a author, category, or tag assigned

  postsList.forEach(edge => {
    if (edge.node.data.author_group[0].author) {
      edge.node.data.author_group.forEach(a => {
        authorSet.add(a.author.document.data.name)
      })
    }

    // if (edge.node.data.categories[0].category) {
    //   edge.node.data.categories.forEach(cat => {
    //     categorySet.add(cat.category.document.data.name)
    //   })
    // }

    // if (edge.node.data.tags[0].tag) {
    //   edge.node.data.tags.forEach(t => {
    //     tagSet.add(t.tag.document.data.name)
    //   })
    // }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  const authorList = Array.from(authorSet)

  authorList.forEach(author => {
    createPage({
      path: `/authors/${_.kebabCase(author)}`,
      component: authorTemplate,
      context: {
        author,
      },
    })
  })

  const categoryList = Array.from(categorySet)

  // categoryList.forEach(category => {
  //   createPage({
  //     path: `/categories/${_.kebabCase(category)}`,
  //     component: categoryTemplate,
  //     context: {
  //       category,
  //     },
  //   })
  // })

  const tagList = Array.from(tagSet)

  // tagList.forEach(tag => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag)}`,
  //     component: tagTemplate,
  //     context: {
  //       tag,
  //     },
  //   })
  // })

  console.log('>>>TAG SET', authorList)
  // console.log('>>>CATEGORY SET', categoryList)
  // console.log('>>>AUTHOR SET', tagList)
}
