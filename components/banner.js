import React from "react"
import styled from "styled-components"
import { colors, linkResolver } from "constants"
import NextLink from "next/link"
import { RichText, Link } from "prismic-reactjs"
import Card from "@statematters/components/card"
import { useSpring, animated, config } from "react-spring"

export default function Banner({ data }) {
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(1.1)" },
    opacity: 1,
    transform: "scale(1)",
    config: config.gentle
  })
  return (
    <StyledBanner padding={0} style={spring}>
      <div className="banner__copy">
        <h2>{RichText.asText(data.title)}</h2>
        {RichText.render(data.description)}
        <NextLink href={Link.url(data.link, linkResolver)}>
          <a className="banner__link">{data.link_text || "Learn More"}</a>
        </NextLink>
      </div>
      <img
        className="banner__image"
        src={data.image_banner.url}
        alt={data.image_banner.alt || "banner image"}
      />
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
