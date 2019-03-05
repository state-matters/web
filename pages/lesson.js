import styled from "styled-components"
import { apiUrl, colors } from "constants"
import Prismic from "prismic-javascript"
import { RichText, Link } from "prismic-reactjs"

const Lesson = ({ document: { data, first_publication_date } }) => {
  const options = { day: "2-digit", month: "long", year: "numeric" }
  return (
    <Page>
      <h1 className="lesson__title">{RichText.asText(data.title)}</h1>
      <p className="lesson__subtitle">
        {new Date(first_publication_date).toLocaleDateString("en-US", options)} |{" "}
        {Math.round(data.word_count / 200)} min read{" "}
      </p>
      <img src={Link.url(data.poster)} alt={data.poster.alt} className="lesson__poster" />
      <section className="lesson__body">{RichText.render(data.body)}</section>
      <ul className="social">
        <li>
          <a className="mdi mdi-twitter" href="" />
        </li>
        <li>
          <a className="mdi mdi-facebook" href="" />
        </li>
        <li>
          <a className="mdi mdi-linkedin" href="" />
        </li>
      </ul>
    </Page>
  )
}

Lesson.getInitialProps = async ({ query }) => {
  try {
    const api = await Prismic.api(apiUrl)
    const document = await api.getByID(query.id)
    return { document }
  } catch (error) {
    return { error }
  }
}

const Page = styled.main`
  position: relative;
  max-width: 72rem;
  margin: 0 auto;
  padding: 9rem 2rem 4rem;
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