import { createGlobalStyle } from "styled-components"
import { colors } from "@constants"

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
:root {
  font-size: 12px;
}

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strong, sub, sup, var, b, u, i,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  font: inherit;
	vertical-align: baseline;
}

body, html {
  width: 100%;
  height: 100%;
}
body {
  position: relative;
  background: ${colors.grey_100};
  color: ${colors.grey_900};
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  overflow: auto;
}
#__next {
  overflow: auto;
}
h1 {
  font-size: 4rem;
  font-weight: 200;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2.5rem;
}
h4 {
  font-size: 2rem;
  font-weight: 700;
}
h5 {
  font-size: 1.5rem;
  font-weight: 900;
}
p {
  line-height: 1.3334;
  font-weight: 400;
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

.lesson__body {
  h1 {
    margin: 3rem 0 1rem;
  }
  h2 {
    margin: 2rem 0 1rem;
  }
  h3 {
    margin: 2rem 0 1rem;
  }
  h4 {
    margin: 1rem 0 1rem;
  }
  h5 {
    margin: 1rem 0 1rem;
  }
  p {
    margin: 1rem 0 0;
  }
}

.scroll-container {
  display: flex;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 2rem;
  padding-bottom: 2rem;
  scroll-padding-left: 2rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 62rem) {
    padding-left: calc(50vw - 39rem);
    scroll-padding-left: calc(50vw - 34rem);
  }
}
.scroll-item {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 100%;
  max-width: 25rem;
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
}
.scroll-spacer {
  width: 1px;
  flex: 0 0 auto;
}
`
