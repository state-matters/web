import styled from "styled-components"
import client from "contentfulClient"
import Link from "next/link"

const Lessons = props => (
  <LessonsWrapper className="lesson-list container">
    {props.lessons.map(lesson => (
      <div className="lesson-list__item">
        <div className="copy">
          <h3>{lesson.fields.title}</h3>
          <Link
            as={`/l/${lesson.sys.id}`}
            href={`/lessons/show?id=${lesson.sys.id}`}
          >
            <a>Read more.</a>
          </Link>
        </div>
        <img src={lesson.fields.poster.fields.file.url} alt="" />
      </div>
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
  margin-top: 6rem;
  .lesson-list__item {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
  img {
    height: 20rem;
    margin-left: auto;
  }
`

export default Lessons
