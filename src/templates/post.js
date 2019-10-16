import React from "react"
import { graphql } from "gatsby"

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <>
      <h1>{data.title.text}</h1>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
      }
    }
  }
`