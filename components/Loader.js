import React from "react"
import styled from "styled-components"
import theme from "theme"

const StyledLoader = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${theme.colors.primary["500"]};
  border-right: 1.1em solid ${theme.colors.primary["500"]};
  border-bottom: 1.1em solid ${theme.colors.primary["500"]};
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  transform: translateZ(0);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export default props => <StyledLoader>loading...</StyledLoader>
