import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    padding-bottom: 20px;
    text-align: left;
  }
`

const BodyText = ({ input }) => <Content dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />

export default BodyText

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
