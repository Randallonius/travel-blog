import React, { Component } from "react"
import styled from '@emotion/styled'

const TextContainer = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    display: block;
    position: absolute;
    top: 35%;
    border: 1px solid black;
    background: rgba(255,255,255,0.7);
  }

  h1 {
    margin: 0;
  }
`

const TextInnerContainer = styled.div`
  padding: 50px 50px 50px 100px;
  width: 90%;
`

class HeroTextContainer extends Component{
  render() {
    return (
      <TextContainer>
        <TextInnerContainer>
          <h1>Welcome to</h1>
          <h1>{this.props.data.title.text}</h1>
          <span dangerouslySetInnerHTML={{ __html: this.props.data.content.html }}></span>
        </TextInnerContainer>
      </TextContainer>
    )
  }
}

export default HeroTextContainer