import React, { useRef } from "react"
import styled from "styled-components"
import { colors } from "constants"
import NextLink from "next/link"
import { RichText } from "prismic-reactjs"
import Container from "components/container"

export default function Lessons({ lessons }) {
  const lessonsRef = useRef()
  return (
    <StyledLessons>
      <Container>
        <h4 className="section-title">All Lessons</h4>
      </Container>
      <div className="lessons" ref={lessonsRef}>
        {lessons.map(({ node: lesson }, idx) => {
          return (
            <div className="lesson" key={lesson._meta.uid}>
              <div className="tags">
                {lesson._meta.tags.map((tag, idx) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <NextLink
                href="/lessons/[uid]"
                as={`/lessons/${lesson._meta.uid}`}
              >
                <h3 className="title">{RichText.asText(lesson.title)}</h3>
              </NextLink>
              {/* <Author author={lesson.author.data} /> */}
            </div>
          )
        })}
        <div className="lesson-spacer" />
      </div>
      <Container className="slider-buttons">
        <span
          className="mdi mdi-chevron-left"
          onClick={e => {
            lessonsRef.current.scrollLeft -= 300
          }}
        />
        <span
          className="mdi mdi-chevron-right"
          onClick={e => {
            lessonsRef.current.scrollLeft += 300
          }}
        />
      </Container>
    </StyledLessons>
  )
}

const StyledLessons = styled.section`
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
    padding-bottom: 2rem;
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
  .tag {
    font-size: 1.25rem;
    font-family: "Poppins", sans-serif;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    background-color: ${colors.purple_100};
    display: inline-block;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  .lesson-spacer {
    width: 1px;
    flex: 0 0 auto;
  }
  .slider-buttons {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 4rem;
    .mdi {
      font-size: 4rem;
      &:hover {
        color: ${colors.purple_300};
      }
    }
  }
`
