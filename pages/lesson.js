import styled from "styled-components"
import { apiUrl, colors } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import MetaTags from "components/meta-tags"
import Container from "components/container"

const Lesson = ({ document: { data }, id }) => {
  const description = RichText.asText(data.body)
    .substring(0, 250)
    .concat("...")
  return (
    <Page>
      <MetaTags
        title={RichText.asText(data.title)}
        description={description}
        image={data.poster.url}
      />
      <Container>
        <h1 className="lesson__title">{RichText.asText(data.title)}</h1>
        <p className="lesson__subtitle">{Math.round(data.word_count / 200)} min read</p>
        {data.lesson_video.html ? (
          <div
            className="lesson__video"
            dangerouslySetInnerHTML={{ __html: data.lesson_video.html }}
          />
        ) : (
          <img src={data.poster.url} alt={data.poster.alt} className="lesson__poster" />
        )}
        <section className="lesson__body">{RichText.render(data.body)}</section>
        <ul className="social">
          <li>
            <a
              className="mdi mdi-twitter"
              href={`https://twitter.com/intent/tweet?text=${data.tweet}`}
              data-size="large"
            />
          </li>
          <li>
            <a
              className="mdi mdi-facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.statematters.org/lesson?id=${id}`}
            />
          </li>
          <li>
            <a
              className="mdi mdi-linkedin"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.statematters.org/lesson?id=${id}&title=${
                data.title
              }&summary=${description}`}
            />
          </li>
        </ul>
      </Container>
    </Page>
  )
}

Lesson.getInitialProps = async ({ query }) => {
  try {
    const api = await Prismic.api(apiUrl)
    const document = await api.getByID(query.id)
    return { document, id: query.id }
  } catch (error) {
    return { error }
  }
}

const Page = styled.main`
  position: relative;
  padding: 9rem 0 4rem;
  .lesson__title {
    margin-bottom: 0.5rem;
  }
  .lesson__subtitle {
    margin-bottom: 3rem;
  }
  .lesson__video {
    position: relative;
    padding-top: 56%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .lesson__poster {
    width: 100%;
  }
  .lesson__body {
    p {
      margin: 2rem 0;
    }
  }
  .social {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 2rem;
      font-size: 2rem;
      a {
        color: ${colors.grey_700};
        &:hover {
          color: ${colors.grey_900};
        }
      }
    }
  }
`

export default Lesson
