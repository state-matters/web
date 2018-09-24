import { withRouter } from "next/router"
import client from "contentfulClient"
import Markdown from "react-markdown"
import styled from "styled-components"

const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      <h1>{article.fields.title}</h1>
      <Markdown>{article.fields.body}</Markdown>
    </ArticleWrapper>
  )
}

Article.getInitialProps = async context => {
  const article = await client.getEntry(context.query.id)
  return { article }
}

const ArticleWrapper = styled.main`
  padding: 1rem;
  img {
    max-width: 100%;
  }
`

export default withRouter(Article)
