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
      <div className="lessons scroll-container" ref={lessonsRef}>
        {lessons.map(({ node: lesson }, idx) => {
          return (
            <div className="lesson scroll-item" key={lesson._meta.uid}>
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
        <div className="scroll-spacer" />
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
  .lesson {
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
