import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import Card from "@statematters/components/card"
import { RichText } from "prismic-reactjs"
import { useSpring, animated, config } from "react-spring"
import Link from "components/link"

const StyledBanner = styled(animated(Card))`
  margin-top: -10rem;
  background: ${colors.grey_100};
  display: grid;
  grid-template-columns: auto auto;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  z-index: 9;
  .banner__copy {
    padding: 2rem;
    grid-row: 2;
  }
  .banner__image {
    width: 100%;
    object-fit: cover;
    grid-column: span 2;
    max-height: 30rem;
  }
  @media (min-width: 60rem) {
    .banner__image {
      width: 30rem;
      height: 30rem;
      grid-column: span 1;
    }
    .banner__copy {
      grid-row: 1;
    }
  }
`

export default function Banner({ title, photo, body }) {
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(1.1)" },
    opacity: 1,
    transform: "scale(1)"
  })
  return (
    <StyledBanner padding={0} style={spring}>
      <div className="banner__copy">
        <RichText render={title} />
        <RichText render={body} serializeHyperlink={Link} />
      </div>
      <picture className="banner__image">
        <source srcSet={photo.desktop.url} media="(min-width: 40rem)" />
        <source srcSet={photo.url} />
        <img
          className="banner__image"
          src={photo.url}
          alt={photo.alt || "banner image"}
        />
      </picture>
    </StyledBanner>
  )
}
