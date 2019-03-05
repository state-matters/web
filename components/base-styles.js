import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
:root {
  font-size: 12px;
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  position: relative;
  background: ${colors.grey_100};
  color: ${colors.grey_900};
  font-size: 1.5rem;
  font-family: "Martel", serif;
}
h1, h2, h3, h4, h5, p {
  margin: 0;
  vertical-align: middle;
}
h1 {
  font-size: 3rem;
  font-weight: 200;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.5rem;
  font-weight: 700;
}
a {
  color: ${colors.grey_900};
  transition: 200ms;
  &:hover {
    color: ${colors.orange_500};
  }
}
.container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.block-link {
  display: inline-block;
  color: ${colors.purple_100};
  font-weight: 900;
  text-decoration: none;
}
`
