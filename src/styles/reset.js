import { css } from '@emotion/core'

const reset = css`
html, .root {
  font-size: 16px;
  line-height: 24px;
}
body, .article {
  
font-family: sans-serif;
font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: auto;
}
h1, .h1 {
  font-size: 4.25rem;
  line-height: 4.5rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
h2, .h2 {
  font-size: 2.625rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3, .h3 {
  font-size: 1.625rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h4, .h4 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h5, .h5 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
p, ul, ol, pre, table, blockquote  {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}
a, b, i, strong, em, small, code {
  line-height: 0;
}
sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

`

export default reset
