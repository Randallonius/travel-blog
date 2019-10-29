import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiMapPin } from 'react-icons/fi'
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

  @media screen and (min-width: ${props => props.theme.breakpoints.s})  {
    font-size: 1.5em;
    &:hover {
      animation: ${bounce} 2s ease infinite;
    }
  }
`

class SlideButtonContainer extends Component{
  render() {
    return(
      <SlideButton>
        <FiMapPin onMouseUp={this.props.handleClick}/>
      </SlideButton>
    )
  }
}

export default SlideButtonContainer