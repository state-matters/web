import styled from "styled-components"
import client from "contentfulClient"
import Link from "next/link"
import { colors } from "constants"

const Lessons = props => (
  <LessonsWrapper className="container">
    <h1>Helpful Tidbits</h1>
    {props.lessons.map(lesson => (
      <LessonItem lessonBg={lesson.fields.poster.fields.file.url}>
        <div className="copy">
          <h3>{lesson.fields.title}</h3>
          <Link
            href={`/lessons/show?id=${lesson.sys.id}`}
            as={`/l/${lesson.sys.id}`}
          >
            <a>Read more.</a>
          </Link>
        </div>
        <div className="lesson-image" />
      </LessonItem>
    ))}
  </LessonsWrapper>
)

Lessons.getInitialProps = async () => {
  const { items } = await client.getEntries({
    content_type: "lesson",
    select: "sys.id,fields.title,fields.poster"
  })
  return { lessons: items }
}

const LessonsWrapper = styled.section`
  position: relative;
  max-width: 75rem;
  margin: 10rem auto 0;
`

const LessonItem = styled.article`
  display: flex;
  margin-top: 5rem;
  height: 20rem;
  position: relative;
  background: ${colors.orange_100};
  .copy {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: 75%;
    z-index: 1;
    a {
      margin-top: auto;
    }
  }
  .lesson-image {
    position: absolute;
    height: 100%;
    right: 0;
    width: 50%;
    background: linear-gradient(
        280deg,
        rgba(255, 217, 205, 0) 0%,
        rgba(255, 217, 205, 0.6) 48%,
        rgba(255, 217, 205, 1) 88%
      ),
      url(${({ lessonBg }) => lessonBg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
  }
`

export default Lessons
