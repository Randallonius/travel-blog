import React from 'react'
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
      color: ${props => props.theme.colors.accentBlue};
    }
  }
`

const SlideButtonContainer = ({ open, setOpen }) => (
  <SlideButton open={open} onClick={() => setOpen(!open)}>
    <FiMapPin />
  </SlideButton>
)

export default SlideButtonContainer

SlideButtonContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
