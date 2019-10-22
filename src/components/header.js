import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.nav`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  padding: 1.5rem 3rem;
  flex-direction: column;
  align-items: center;

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
  margin-bottom: 1.250em;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    margin-bottom: 0;
  }
  a {
    font-size: 1.5rem;
    font-weight: 700;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 2.25rem;
    }
  }
`
const HeaderRight = styled.div`
  display: flex;
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
    background: ${props => props.theme.colors.greyDark};
    transition: width 0.25s;
    position: relative;
    top: 5px;
  }

  :hover::after {
    width: 100%;
  }
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <HeaderLeft>
          <Link to="/" aria-label="Back to Home">
            {this.props.siteTitle}
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLink to="/" aria-label="Back to Home">
            Blog
          </HeaderLink>
          <HeaderLink to="/about" aria-label="About Page">
            About
          </HeaderLink>

        </HeaderRight>
      </StyledHeader>
    )
  }
}

export default Header
