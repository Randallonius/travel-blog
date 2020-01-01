import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { BodyText, Image } from '../slices'

const Content = styled.div`
  p,
  li {
    line-height: 2em;
  }
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        // Add any further slices into this file
        // Add excerpt into this file
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
