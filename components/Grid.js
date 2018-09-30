import styled from "styled-components"

// TODO: doc this grid

export const Grid = styled.section.attrs({
  className: ({ container }) => (container ? `container grid` : `grid`)
})`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: 2rem;
`

export const Column = styled.div.attrs({
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
    grid-column: ${({ sm, smOffset }) =>
      smOffset
        ? ` ${smOffset + 1} / span ${sm ? sm : 12}`
        : `span ${sm ? sm : 12}`};
  }

  @media (min-width: 60rem) {
    grid-column: ${({ sm, md, smOffset, mdOffset }) =>
      smOffset || mdOffset
        ? ` ${(mdOffset ? mdOffset : smOffset ? smOffset : null) + 1} / span ${
            md ? md : sm ? sm : 12
          }`
        : `span ${md ? md : sm ? sm : 12}`};
  }

  @media (min-width: 80rem) {
    grid-column: ${({ sm, md, lg, smOffset, mdOffset, lgOffset }) =>
      smOffset || mdOffset || lgOffset
        ? ` ${(lgOffset
            ? lgOffset
            : mdOffset
              ? mdOffset
              : smOffset
                ? smOffset
                : null) + 1} / span ${lg ? lg : md ? md : sm ? sm : 12}`
        : `span ${lg ? lg : md ? md : sm ? sm : 12}`};
  }

  @media (min-width: 100rem) {
    grid-column: ${({
      sm,
      md,
      lg,
      xLg,
      smOffset,
      mdOffset,
      lgOffset,
      xLgOffset
    }) =>
      smOffset || mdOffset || lgOffset || xLgOffset
        ? ` ${(xLgOffset
            ? xLgOffset
            : lgOffset
              ? lgOffset
              : mdOffset
                ? mdOffset
                : smOffset
                  ? smOffset
                  : null) + 1} / span ${
            xLg ? xLg : lg ? lg : md ? md : sm ? sm : 12
          }`
        : `span ${xLg ? xLg : lg ? lg : md ? md : sm ? sm : 12}`};
  }
`
