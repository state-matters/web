import styled from "styled-components"
import { Grid, Column } from "./Grid"
import Link from "next/link"
import { colors } from "../constants"

const Hero = props => {
  return (
    <HeroWrapper>
      <Grid container className="hero__grid">
        <Column md={8} mdOffset={1}>
          <h1 className="title">
            We clarify Illinois government with short videos & helpful summaries
            on the issues that matter to you!
          </h1>
          <Link className="hero__link" color={colors.grey_100} to="/about">
            Learn more about us
          </Link>
        </Column>
      </Grid>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey_900};
  color: ${colors.grey_100};
  .hero__grid {
    min-height: calc(75vh - 4rem);
    align-items: center;
    padding: 1rem;
  }
  .hero__link {
    margin-top: 2rem;
  }
`

export default Hero
