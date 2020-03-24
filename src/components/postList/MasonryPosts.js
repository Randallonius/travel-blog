import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Masonry from 'react-masonry-component'
import PostItem from './PostItem'

const List = styled.div`
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0 15px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    padding: 40px 0 10px;
  }
`

class MasonryPosts extends Component {
  render() {
    const { posts, location } = this.props
    return (
      <List>
        <Masonry>
          {posts.map(post => {
            let categories = false
            let author = false
            console.log('>>>CAT', post.node.data)
            if (post.node.data.categories[0].category) {
              categories = post.node.data.categories.map(c => c.category.document.data.name)
            }
            if (post.node.data.author_group[0].author) {
              author = post.node.data.author_group.map(a => a.author.document.data.name)
            }
            return (
              <PostItem
                key={post.node.uid}
                node={post.node}
                categories={categories}
                location={location}
                author={author}
              />
            )
          })}
        </Masonry>
      </List>
    )
  }
}

export default MasonryPosts

MasonryPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}
