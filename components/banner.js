import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import { RichText } from "prismic-reactjs"
import Card from "@statematters/components/card"

export default ({ data }) => (
  <Banner padding={0}>
    <div className="copy">
      <h2>{RichText.asText(data.title)}</h2>
      {RichText.render(data.description)}
      <a href="" />
    </div>
    <img src={data.image_banner.url} alt={data.image_banner.alt} />
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
  img {
    display: block;
    height: 100%;
    align-self: center;
  }
  .copy {
    padding: 2rem;
    align-self: flex-start;
  }
  @media (min-width: 50rem) {
    flex-direction: row;
    justify-content: flex-start;
    img {
      max-height: 25rem;
    }
  }
`
