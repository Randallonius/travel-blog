import React from 'react'
import PropTypes from 'prop-types'
import { Aside, Title } from '../components'
import { TemplateContainer, TemplateContent, Wrapper } from './TemplateStyle'
import { MasonryPosts } from '../components/postList'

const TemplateWrapper = Wrapper.withComponent('main')

const PostPage = ({ title, posts, location }) => {
  return (
    <TemplateWrapper>
      <TemplateContainer>
        <TemplateContent>
          <Title>{title}</Title>
          <MasonryPosts posts={posts} location={location} />
        </TemplateContent>
        <Aside />
      </TemplateContainer>
    </TemplateWrapper>
  )
}

PostPage.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}

export default PostPage
