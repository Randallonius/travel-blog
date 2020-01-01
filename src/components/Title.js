import styled from '@emotion/styled'

const Title = styled.p`
  font-size: 1.2rem;
  position: relative;
  text-align: center;
  border-bottom: 1px solid;
  width: 80%;
  margin: 0px auto 0.5em;
  text-transform: uppercase;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: 2rem;
    min-width: 20%;
  }
`

export default Title
