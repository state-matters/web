import React from "react"
import styled from "styled-components"
import theme from "theme"

const getTag = props => {
  switch (props.type) {
    case "hero":
      return <h1 {...props}>{props.children}</h1>
    case "headline":
      return <h2 {...props}>{props.children}</h2>
    case "title":
      return <h3 {...props}>{props.children}</h3>
    case "subtitle":
      return <h4 {...props}>{props.children}</h4>
    case "eyebrow":
      return <h4 {...props}>{props.children}</h4>
    case "body":
      return <p {...props}>{props.children}</p>
    default:
      return <p {...props}>{props.children}</p>
  }
}

const Text = styled(getTag)`
  color: ${theme.colors.grey["900"]};
  font-family: ${theme.fontFamily};
`

export default Text
