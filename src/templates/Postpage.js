import React from 'react'
import PropTypes from 'prop-types'
import { Aside, Title } from '../components'
import { TemplateContainer, TemplateContent, Wrapper } from './TemplateStyle'
import { MasonryPosts } from '../components/postList'

const TemplateWrapper = Wrapper.withComponent('main')

const PostPage = ({ topic, posts, location, totalCount }) => {
  const topicLowerCase = topic.toLowerCase()
  return (
    <TemplateWrapper>
      <TemplateContainer>
        <TemplateContent>
          <div>
            {(() => {
              switch (location.pathname) {
                case '/blog':
                  return <Title>{topic}</Title>
                case `/authors/${topicLowerCase}`:
                  return (
                    <Title>
                      {totalCount === 1 ? 'Post' : 'Posts'} written by {topic}
                    </Title>
                  )
                case `/categories/${topicLowerCase}`:
                  return (
                    <Title>
                      {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} {totalCount === 1 ? 'was' : 'were'} categorized
                      as "{topic}"
                    </Title>
                  )
                case `/tags/${topicLowerCase}`:
                  return (
                    <Title>
                      {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} {totalCount === 1 ? 'was' : 'were'} tagged as "
                      {topic}"
                    </Title>
                  )
                default:
                  return null
              }
            })()}
          </div>
          <MasonryPosts posts={posts} location={location} />
        </TemplateContent>
        <Aside />
      </TemplateContainer>
    </TemplateWrapper>
  )
}

PostPage.defaultProps = {
  totalCount: 0,
}

PostPage.propTypes = {
  topic: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  totalCount: PropTypes.number,
}

export default PostPage
