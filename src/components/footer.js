import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FiInstagram, FiMail } from 'react-icons/fi'
import website from '../../config/website'

const StyledFooter = styled.footer`
  width: 100%;
  margin: 6rem auto 0 auto;
  border-top: 1px solid ${props => props.theme.colors.accentBlue};
`
const FooterContainer = styled.div`
  display: flex;
  padding: 3% 4% 0% 4%;
  background: ${props => props.theme.colors.white};
  justify-content: space-evenly;
  flex-wrap: wrap;
}
`

const FooterContainerInner = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  text-align: center;
  height: 150px;
  width: 200px;
`

const FooterTitle = styled.h4`
  font-size: 0.875em;
  margin-top: 1.45rem;
`

const FooterLink = styled(Link)`
  display: block;
  font-size: 0.875em;

  &:hover {
    color: ${props => props.theme.colors.grey};
  }
`

const FooterCopyright = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.white};
`

const SocialLink = styled.a`
  font-size: 1.2em;
  transition: all 0.25s ease-in-out;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  width: 2em;
  height: 2em;
  line-height: 1.9em;
  display: inline-block;
  box-sizing: content-box;

  &:hover {
    background-color: ${props => props.theme.colors.accentBlue};
    color: ${props => props.theme.colors.greyLight};
    border-color: transparent;
  }
`

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <FooterContainer>
          <FooterContainerInner>
            <div>
              <FooterTitle>Contact</FooterTitle>
            </div>
            <div>
              <SocialLink href={`mailto:${website.email}`}>
                <FiMail />
              </SocialLink>
            </div>
          </FooterContainerInner>
          <FooterContainerInner>
            <div>
              <FooterTitle>Follow</FooterTitle>
            </div>
            <div>
              <SocialLink href={`http://www.instagram.com/${website.instagram}`}>
                <FiInstagram />
              </SocialLink>
            </div>
          </FooterContainerInner>
          <FooterContainerInner>
            <div>
              <FooterTitle>About</FooterTitle>
            </div>
            <div>
              <FooterLink to="/about" aria-label="To About Page">
                Who are we and what are we doing?
              </FooterLink>
            </div>
          </FooterContainerInner>
        </FooterContainer>
        <FooterCopyright>
          <small>© {new Date().getFullYear()}, Built with love by Randallonius</small>
        </FooterCopyright>
      </StyledFooter>
    )
  }
}

export default Footer
