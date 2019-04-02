import React from "react"
import styled from "styled-components"
import { colors, linkResolver } from "constants"
import Link from "next/link"
import { RichText } from "prismic-reactjs"
import Card from "@statematters/components/card"

export default ({ data }) => (
  <Banner padding={0}>
    <div className="banner__copy">
      <h2>{RichText.asText(data.title)}</h2>
      {RichText.render(data.description)}
      <Link href={Link.url(data.link, linkResolver)}>
        <a className="banner__link">Learn More</a>
      </Link>
    </div>
    <img className="banner__image" src={data.image_banner.url} alt={data.image_banner.alt} />
  </Banner>
)

const Banner = styled(Card)`
  margin-top: -7.5rem;
  background: ${colors.grey_100};
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  justify-content: flex-end;
  border-radius: 4px;
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
    color: ${colors.orange_500};
  }
  @media (min-width: 60rem) {
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
  }
`
