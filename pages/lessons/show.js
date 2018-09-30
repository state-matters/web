import styled from "styled-components"
import Markdown from "react-markdown"
import client from "contentfulClient"
import { colors } from "constants"
import Head from "next/head"

const Lesson = ({ lesson }) => {
  return (
    <LessonWrapper>
      <Head>
        <meta property="og:title" content={lesson.fields.title} />
      </Head>
      <h1 className="headline">{lesson.fields.title}</h1>
      <div className="video-container">
        <video
          controls
          preload="auto"
          src={lesson.fields.video.fields.file.url}
        />
      </div>
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
  h1 {
    position: absolute;
    top: 6rem;
    width: calc(100% - 4rem);
    max-width: 100rem;
    margin: 0 auto;
  }
  .video-container {
    background: ${colors.grey_900};
    min-height: calc(100vh - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  video {
    display: block;
    width: 100%;
    max-width: 100rem;
  }
`

export default Lesson
