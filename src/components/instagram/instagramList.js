import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import InstagramItem from './instagramItem'

const InstaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0 15px;
  }
`

export default class InstagramList extends Component {
  render() {
    const { instagrams } = this.props
    return (
      <InstaList>
        {instagrams.map(instagram => {
          return <InstagramItem key={instagram.node.id} node={instagram.node} />
        })}
      </InstaList>
    )
  }
}

InstagramList.propTypes = {
  instagrams: PropTypes.array.isRequired,
}
