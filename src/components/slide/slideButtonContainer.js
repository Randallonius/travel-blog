import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiMapPin } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { bounce } from '../../styles/keyframes'

const SlideButton = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.greyDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.5em;
    &:hover {
      animation: ${bounce} 2s ease infinite;
    }
  }
`

class SlideButtonContainer extends Component {
  render() {
    const { handleClick } = this.props
    return (
      <SlideButton>
        <FiMapPin onMouseUp={handleClick} />
      </SlideButton>
    )
  }
}

export default SlideButtonContainer

SlideButtonContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
