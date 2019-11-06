import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiX } from 'react-icons/fi'
import PropTypes from 'prop-types'
import MapContainer from '../map/mapContainer'
import CurrentLocation from './currentLocation'
import FutureLocation from './futureLocation'
import Title from '../title'

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.bg};
  border-left: 1px solid ${props => props.theme.colors.primary};
  padding: 15px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1000;

  &.hide {
    transform: translate3d(100vw, 0, 0);
  }

  &.show {
    transform: translate3d(0vw, 0, 0);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    width: 80vw;

    &.hide {
      transform: translate3d(80vw, 0, 0);
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    width: 60vw;

    &.hide {
      transform: translate3d(60vw, 0, 0);
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: 40vw;

    &.hide {
      transform: translate3d(40vw, 0, 0);
    }
  }
`
const CloseButton = styled.div`
  font-size: 1.5em;
  width: 1.5em;
  height: 1.5em;
  border: 1px solid ${props => props.theme.colors.greyDark};
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.greyDark};
  }
`

class SlideContainer extends Component {
  render() {
    let visibility = 'hide'
    const { menuVisibility, handleClick } = this.props

    if (menuVisibility) {
      visibility = 'show'
    }
    return (
      <Slide className={visibility}>
        <CloseButton onClick={handleClick}>
          <FiX />
        </CloseButton>
        <Title>Where are we currently?</Title>
        <CurrentLocation />
        <Title>Where have we been?</Title>
        <MapContainer />
        <Title>Where to next?</Title>
        <FutureLocation />
      </Slide>
    )
  }
}

export default SlideContainer

SlideContainer.propTypes = {
  menuVisibility: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}
