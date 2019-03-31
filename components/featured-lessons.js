import React from "react"
import styled from "styled-components"
import { colors, linkResolver } from "constants"
import NextLink from "next/link"
import { RichText, Link } from "prismic-reactjs"
import Author from "components/author"
import Container from "components/container"

export default ({ featuredLessons }) => {
  return (
    <FeaturedLessons>
      <Container>
        <h4 className="section-title">Featured</h4>
      </Container>
      <div className="lessons">
        {featuredLessons.map((lesson, i) => (
          <div className="lesson" key={i}>
            <NextLink prefetch href={Link.url(lesson.link, linkResolver)}>
              <h3 className="title">{RichText.asText(lesson.title)}</h3>
            </NextLink>
            <Author url={lesson.poster.url} alt="Some alt text" name="Kacie Smith" />
          </div>
        ))}
        <div className="lesson-spacer" />
      </div>
    </FeaturedLessons>
  )
}

const FeaturedLessons = styled.section`
  position: relative;
  .section-title {
    margin: 6rem 0 2rem;
    color: ${colors.grey_700};
  }
  .lessons {
    display: flex;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-left: 2rem;
    padding-bottom: 4rem;
    scroll-padding-left: 2rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 62rem) {
      padding-left: calc(50vw - 39rem);
      scroll-padding-left: calc(50vw - 34rem);
    }
  }
  .lesson {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: 100%;
    max-width: 25rem;
    background: ${colors.grey_300};
    padding: 2rem;
    border-radius: 4px;
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
    .title {
      cursor: pointer;
      transition: 200ms;
      &:hover {
        color: ${colors.orange_500};
      }
    }
  }
  .lesson-spacer {
    width: 1px;
    flex: 0 0 auto;
  }
`
