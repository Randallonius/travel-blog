import React, { Component } from 'react'
import styled from '@emotion/styled'
import SubTitle from '../subTitle'

const CountryList = styled.ul`
  text-align: center;
  list-style: none;
  margin: 0;
`

class FutureLocation extends Component {
  render() {
    return (
      <div>
        <div>
          <SubTitle>November</SubTitle>
          <CountryList>
            <li>Spain</li>
          </CountryList>
        </div>
        <div>
          <SubTitle>December</SubTitle>
          <CountryList>
            <li>France</li>
            <li>Turkey</li>
            <li>Greece</li>
            <li>Egypt</li>
          </CountryList>
        </div>
      </div>
    )
  }
}

export default FutureLocation