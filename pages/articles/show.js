import { withRouter } from "next/router"
import Head from "next/head"
import client from "contentfulClient"
import Markdown from "react-markdown"
import styled from "styled-components"
import theme from "../../components/theme"
import { Grid, Column } from "components/Grid"
import { Link } from "next/link"

const StyledArticle = styled(Grid)`
  padding: 10rem 1rem;
  min-height: 100vh;
  .article__hero-image {
    max-width: 100%;
  }
  .article__body {
    margin-bottom: 2rem;
    h2,
    h3,
    h4 {
      margin-top: 4rem;
    }
    p {
      margin-top: 2rem;
      line-height: 2;
    }
    img {
      max-width: 100%;
    }
  }
  .contributor {
    display: flex;
    align-items: center;
  }
  .contributor__info {
    flex: 1;
    line-height: 2;
  }
  .contributor__image {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin-right: 1rem;
    box-shadow: 0 12px 12px -6px rgba(0, 0, 0, 0.12);
  }
  @media (min-width: ${theme.breakPoints.sm}) {
    padding: 10rem 0;
  }
`

const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      <Head>
        <meta property="og:description" content={article.fields.title} />
      </Head>
      <StyledArticle container>
  <Column smOffset={1} sm={11}>
    <Link color="black" href="/">
      Back
    </Link>
  </Column>
  <Column smOffset={1} sm={8}>
    <h1>{article.fields.title}</h1>
    {article.fields.photo && (
      <img
        className="article__hero-image"
        src={article.fields.photo.fields.file.url}
        alt="hero image"
      />
    )}
    <Markdown className="article__body">{article.fields.body}</Markdown>
    {article.fields.contributor && (
      <React.Fragment>
        <p>About the author: </p>
        <div className="contributor">
          <img
            className="contributor__image"
            src={article.fields.contributor.fields.photo.fields.file.url}
            alt={`${article.fields.contributor.fields.name}'s photo`}
          />
          <div className="contributor__info">
            <p className="name">{article.fields.contributor.fields.name}</p>
            <p className="bio">{article.fields.contributor.fields.bio}</p>
          </div>
        </div>
      </React.Fragment>
    )}
  </Column>
</StyledArticle>

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
