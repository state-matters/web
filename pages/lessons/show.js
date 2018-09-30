import styled from "styled-components"
import Markdown from "react-markdown"
import client from "contentfulClient"
import { colors } from "constants"
import Head from "next/head"

const Lesson = ({ lesson }) => {
  return (
    <LessonWrapper className="container">
      <Head>
        <meta property="og:title" content={lesson.fields.title} />
        <meta
          property="og:image"
          content={lesson.fields.poster.fields.file.url}
        />
      </Head>
      <h1 className="headline">{lesson.fields.title}</h1>
      <video
        controls
        preload="auto"
        src={lesson.fields.video.fields.file.url}
      />
      <div className="container">
        <Markdown className="markdown">{lesson.fields.body}</Markdown>
      </div>
    </LessonWrapper>
  )
}

Lesson.getInitialProps = async ({ query }) => {
  const lesson = await client.getEntry(query.id)
  return { lesson }
}

const LessonWrapper = styled.section`
  position: relative;
  margin-top: 10rem;
  video {
    display: block;
    width: 100%;
    margin-top: 5rem;
  }
`

export default Lesson
