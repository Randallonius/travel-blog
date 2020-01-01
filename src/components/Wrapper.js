import styled from '@emotion/styled'

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 2rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding: 0;
  }
`

export default Wrapper
