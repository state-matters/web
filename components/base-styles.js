import { createGlobalStyle } from "styled-components"

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
  font-size: 1.5rem;
}
`
