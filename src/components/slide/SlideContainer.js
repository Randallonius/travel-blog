import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { FiX } from 'react-icons/fi'
import PropTypes from 'prop-types'
import MapContainer from '../map/MapContainer'
import SubTitle from '../SubTitle'
import Title from '../Title'

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.bg};
  border-left: 1px solid ${props => props.theme.colors.primary};
  padding: 15px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1000;
  transform: translateX(100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    width: 80vw;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    width: 60vw;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: 40vw;
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
    background-color: ${props => props.theme.colors.accentBlue};
    border-color: transparent;
  }
`

const SlideContainer = ({ open, setOpen }) => {
  const data = useStaticQuery(graphql`
    query locationQuery {
      prismicHomepage {
        data {
          geolocation {
            text
          }
          ondeck {
            text
          }
        }
      }
    }
  `)

  return (
    <Slide open={open}>
      <CloseButton onClick={() => setOpen(!open)}>
        <FiX />
      </CloseButton>
      <Title>Where are we currently?</Title>
      <SubTitle>{data.prismicHomepage.data.geolocation.text}</SubTitle>
      <Title>On Deck</Title>
      <SubTitle>{data.prismicHomepage.data.ondeck.text}</SubTitle>
      <Title>Where have we been?</Title>
      <MapContainer />
    </Slide>
  )
}

export default SlideContainer

SlideContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
