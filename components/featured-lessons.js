import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import { RichText } from "prismic-reactjs"
import NextLink from "next/link"
import Container from "components/container"

export default function FeaturedLessons({ featuredLessons }) {
  return (
    <StyledFeaturedLessons>
      <Container>
        <h4 className="section-title">Featured</h4>
        {featuredLessons.map(({ lesson }) => (
          <NextLink
            key={lesson.id}
            href="/lessons/[uid]"
            as={`/lessons/${lesson._meta.uid}`}
          >
            <FeaturedLesson url={lesson.poster.url}>
              <h3>{RichText.asText(lesson.title)}</h3>
              <div className="poster" />
            </FeaturedLesson>
          </NextLink>
        ))}
      </Container>
    </StyledFeaturedLessons>
  )
}

const StyledFeaturedLessons = styled.section`
  position: relative;
  .section-title {
    margin: 6rem 0 2rem;
    color: ${colors.grey_700};
  }
`

const FeaturedLesson = styled.div`
  position: relative;
  padding: 2rem;
  background: ${colors.orange_100};
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
  .poster {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20rem;
    background-image: linear-gradient(
        97.5deg,
        rgba(255, 217, 205, 1) 15%,
        rgba(255, 217, 205, 0)
      ),
      url(${({ url }) => url});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`
