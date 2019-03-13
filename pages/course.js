import { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { apiUrl, colors } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import Container from "components/container"
import clsx from "clsx"

const Course = ({ course, lessons }) => {
  const [activeLesson, setActive] = useState(null)
  const handleLessonChange = id => {
    setActive(id)
    localStorage.setItem(course.id, id)
  }
  useLayoutEffect(() => {
    setActive(localStorage.getItem(course.id) || "start")
  }, [])
  return (
    <StyledCourse>
      <div className="course__hero">
        <Container width={105}>
          <div className="course__description">
            {activeLesson === "start" ? (
              <div className="inner">
                <h1>{RichText.asText(course.data.course_title)}</h1>
                {RichText.render(course.data.description)}
              </div>
            ) : activeLesson ? (
              <div
                className="inner"
                dangerouslySetInnerHTML={{
                  __html: lessons.find(l => l.id === activeLesson).data.lesson_video.html
                }}
              />
            ) : null}
          </div>
          <div className="course__list">
            <ul className="inner">
              <li className="list__description">
                <h4>{RichText.asText(course.data.course_title)}</h4>
                {/* <Toggle label="autoplay" /> */}
              </li>
              {lessons.map(lesson => {
                const classes = clsx("lesson", { active: lesson.id === activeLesson })
                return (
                  <LessonListItem
                    key={lesson.id}
                    className={classes}
                    onClick={e => handleLessonChange(lesson.id)}>
                    {RichText.asText(lesson.data.title)}
                  </LessonListItem>
                )
              })}
            </ul>
          </div>
        </Container>
      </div>
    </StyledCourse>
  )
}

Course.getInitialProps = async ({ query }) => {
  try {
    const api = await Prismic.api(apiUrl)
    const course = await api.getByID(query.id)
    const { results: lessons } = await api.getByIDs(
      course.data.lessons.map(({ lesson }) => lesson.id)
    )
    return { course, lessons }
  } catch (error) {
    return { error }
  }
}

export default Course

const StyledCourse = styled.main`
  .course__hero {
    color: ${colors.grey_100};
    background: ${colors.grey_900};
    padding-top: 10rem;
    padding-bottom: 2rem;
    ${Container} {
      display: grid;
      grid-template-columns: 5fr 3fr;
      grid-gap: 2rem;
    }
  }
  .course__description,
  .course__list {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 4px;
  }
  .course__description {
    position: relative;
    padding-top: 56%;
    .inner {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .inner iframe {
      width: 100%;
      height: 100%;
    }
  }
  .course__list {
    position: relative;
    overflow-y: auto;
    .inner {
      position: absolute;
      top: 0;
      left: 0;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      counter-reset: lesson;
    }
    .list__description {
      padding: 3rem 2rem;
      border-bottom: 1px solid ${colors.grey_700};
    }
  }
`

const LessonListItem = styled.li`
  position: relative;
  padding: 2rem;
  padding-left: 3rem;
  counter-increment: lesson;
  &:before {
    content: counter(lesson);
    position: absolute;
    left: 1rem;
    top: 50%;
    color: ${colors.grey_500};
    font-size: 1.25rem;
    transform: translateY(-50%);
  }
  &.active {
    background: ${colors.purple_900};
  }
`
