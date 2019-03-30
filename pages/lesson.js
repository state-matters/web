import styled from "styled-components"
import { apiUrl, colors } from "constants"
import Prismic from "prismic-javascript"
import { RichText, Link } from "prismic-reactjs"
import Head from "next/head"
import Container from "components/container"

const Lesson = ({ document: { data, first_publication_date }, id }) => {
  const options = { day: "2-digit", month: "long", year: "numeric" }
  return (
    <Page>
      <Head>
        <meta property="og:title" content={RichText.asText(data.title)} />
        <meta property="og:description" content={RichText.asText(data.body).substring(0, 50)} />
        <meta property="og:image" content={data.poster.url} />
        <meta name="twitter:title" content={RichText.asText(data.title)} />
        <meta name="twitter:description" content={RichText.asText(data.body).substring(0, 50)} />
        <meta name="twitter:image" content={data.poster.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container>
        <h1 className="lesson__title">{RichText.asText(data.title)}</h1>
        <p className="lesson__subtitle">
          {new Date(first_publication_date).toLocaleDateString("en-US", options)} |{" "}
          {Math.round(data.word_count / 200)} min read{" "}
        </p>
        <img src={data.poster.url} alt={data.poster.alt} className="lesson__poster" />
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
            <a className="mdi mdi-facebook" href="" />
          </li>
          <li>
            <a className="mdi mdi-linkedin" href="" />
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
