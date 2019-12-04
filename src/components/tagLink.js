import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from '@emotion/styled'

const StyledTagLink = styled(Link)`
  font-size: 0.625em;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  letter-spacing: 1px;
  margin: 0 7px 5px 0;
  border: 1px solid black;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accentBlue};
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    border-color: transparent;
  }
`

export default class TagLink extends Component {
  render() {
    const { tags } = this.props
    return (
      <>
        {tags.map(tag => (
          <React.Fragment key={tag}>
            <StyledTagLink to={`/tags/${kebabCase(tag)}`}>{tag}</StyledTagLink>
          </React.Fragment>
        ))}
      </>
    )
  }
}

TagLink.propTypes = {
  tags: PropTypes.array.isRequired,
}
