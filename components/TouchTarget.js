import React from "react"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"
import theme from "theme"

const getLinkTag = ({ children, ...props }) => {
  if (props.to) return <RouterLink {...props}>{children}</RouterLink>
  else return <a {...props}>{children}</a>
}

export const BlockLink = styled(getLinkTag)`
  position: relative;
  display: inline-block;
  padding-right: 2rem;
  padding-left: 0;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${props => props.color || theme.colors.grey["100"]};
  text-decoration: none;
  letter-spacing: 1px;
  transition: transform 300ms;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 0.75rem;
    height: 1rem;
    background-color: ${theme.colors.primary["500"]};
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    transition: 200ms;
  }
  &:hover:after {
    transform: translate3d(0.5rem, -50%, 0);
  }
`

const getButtonTag = ({ children, ...props }) => {
  if (props.to) return <RouterLink {...props}>{children}</RouterLink>
  return <button {...props}>{children}</button>
}

export const Button = styled(getButtonTag)`
  display: inline-block;
  padding: 1rem 2rem;
  border: 4px solid ${theme.colors.grey["900"]};
  border-radius: 2px;
  background-color: transparent;
  color: ${theme.colors.grey["900"]};
  cursor: pointer;
  font-size: 0.75em;
  font-weight: 500;
  transition: 200ms;
  &.primary {
    border: 2px solid ${theme.colors.primary["500"]};
    background-color: ${theme.colors.primary["500"]};
    color: ${theme.colors.grey["100"]};
  }
`

export const Link = styled(RouterLink)`
  position: relative;
  display: inline-block;
  font-weight: 600;
  color: ${theme.colors.primary["500"]};
  transition: 200ms;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.grey["900"]};
  }

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 6px;
    height: 6px;
    width: calc(100% - 6px);
    background-color: ${theme.colors.primary["500"]};
    opacity: 0.6;
    transition: 200ms;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
  }
`
