import React from "react"
import styled from "styled-components"

// TODO: doc this grid

export const Grid = styled.section.attrs({
  className: ({ className, container }) =>
    container
      ? className
        ? `${className} container grid`
        : "container grid"
      : className
        ? `${className} grid`
        : "grid"
})`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: 2rem;
`

export const Column = styled.div.attrs({
  span: ({ xLg, lg, md, sm }) => (xLg ? xLg : lg ? lg : md ? md : sm ? sm : 12),
  offset: ({ smOffset, mdOffset, lgOffset, xLgOffset }) =>
    xLgOffset
      ? xLgOffset
      : lgOffset
        ? lgOffset
        : mdOffset
          ? mdOffset
          : smOffset
            ? smOffset
            : undefined
})`
  grid-column: span 12;

  @media (min-width: 40rem) {
    grid-column: ${({ span, offset }) =>
      offset ? ` ${offset + 1} / span ${span}` : `span ${span}`};
  }

  @media (min-width: 60rem) {
    grid-column: ${({ span, offset }) =>
      offset ? ` ${offset + 1} / span ${span}` : `span ${span}`};
  }

  @media (min-width: 80rem) {
    grid-column: ${({ span, offset }) =>
      offset ? ` ${offset + 1} / span ${span}` : `span ${span}`};
  }

  @media (min-width: 100rem) {
    grid-column: ${({ span, offset }) =>
      offset ? ` ${offset + 1} / span ${span}` : `span ${span}`};
  }
`
