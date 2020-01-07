import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import Card from "@statematters/components/card"
import { RichText } from "prismic-reactjs"
import { useSpring, animated, config } from "react-spring"
import Link from "components/link"

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
      <picture>
        <source srcSet={photo.desktop.url} media="(min-width: 60rem)" />
        <img
          className="banner__image"
          src={photo.url}
          alt={photo.alt || "banner image"}
        />
      </picture>
    </StyledBanner>
  )
}

const StyledBanner = styled(animated(Card))`
  margin-top: -10rem;
  background: ${colors.grey_100};
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  justify-content: flex-end;
  border-radius: 4px;
  position: relative;
  z-index: 9;
  .banner__image {
    display: block;
    height: auto;
    max-width: 100%;
    align-self: center;
  }
  .banner__copy {
    padding: 2rem;
    align-self: flex-start;
  }
  .banner__link {
    display: block;
    margin-top: 1rem;
    color: ${colors.orange_900};
  }
  @media (min-width: 60rem) {
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
  }
`
