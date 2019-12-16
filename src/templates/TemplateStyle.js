import styled from '@emotion/styled'

export const TemplateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TemplateContent = styled.section`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 70%;
  }
`

export const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1rem;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding: 2rem;
  }
`
