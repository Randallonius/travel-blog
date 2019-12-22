import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { SlideButtonContainer, SlideContainer } from '../slide'
import HeaderCategories from './HeaderCategories'
import HeaderLogo from './HeaderLogo'

const StyledHeader = styled.nav`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  padding: 1.5rem 3rem;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    color: ${props => props.theme.colors.greyDark};
    font-weight: 400;
    font-style: normal;
  }
`
const HeaderLeft = styled.div`
  margin-bottom: 1.25em;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    margin-bottom: 0;
  }
  a {
    font-size: 1.5rem;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 2.25rem;
    }
  }
`
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25em;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    margin-bottom: 0;
  }
`
const HeaderLink = styled(Link)`
  font-size: 1rem;
  padding: 0 0.625rem;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.5rem;
  }

  :after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.accentBlue};
    transition: width 0.25s;
    position: relative;
    top: 5px;
  }

  :hover::after {
    width: 100%;
  }
`

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.5em;
  align-items: center;
`

const SLIDE_OPEN_CLASS = 'body--slide-open'

function Header() {
  const [open, setOpen] = useState(false)

  if (open) {
    document.body.classList.add(SLIDE_OPEN_CLASS)
  } else {
    document.body.classList.remove(SLIDE_OPEN_CLASS)
  }

  return (
    <StyledHeader>
      <HeaderLeft>
        <HeaderLogo />
      </HeaderLeft>
      <HeaderRight>
        <HeaderLink to="/" aria-label="Back to Home">
          Blog
        </HeaderLink>
        <HeaderLink to="/about" aria-label="About Page">
          About
        </HeaderLink>
        <div>
          <SlideButtonContainer open={open} setOpen={setOpen} />
          <SlideContainer open={open} setOpen={setOpen} />
        </div>
      </HeaderRight>
      <CategoryContainer>
        <HeaderCategories />
      </CategoryContainer>
    </StyledHeader>
  )
}

export default Header
