import styled from "styled-components"
import { Grid, Column } from "./Grid"
import Link from "next/link"

const FeaturedArticles = props => {
  return (
    <FeaturedArticlesWrapper container>
      <Column>
        <h3>Featured Articles</h3>
      </Column>
      <Column className="featured-articles__grid">
        {props.articles.map(article => {
          const { fields } = article
          return (
            <ArticleCard
              key={article.sys.id}
              title={fields.title}
              photoUrl={fields.photo.fields.file.url}
              photoTitle={fields.photo.fields.title}
              articleId={article.sys.id}
            />
          )
        })}
      </Column>
    </FeaturedArticlesWrapper>
  )
}

const FeaturedArticlesWrapper = styled(Grid)`
  margin-top: 6rem;
  padding: 0 1rem;
  h3 {
    padding-bottom: 2rem;
  }
  .featured-articles__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    .article-card {
      position: relative;
      min-height: 6rem;
      img {
        width: 100%;
      }
    }
    @media (min-width: 60rem) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-auto-flow: dense;
      .article-card:first-of-type {
        grid-column: 1 / span 2;
        grid-row: 1 / span 4;
      }
      .article-card {
        grid-row: span 2;
      }
    }
  }
`

const ArticleCard = ({ title, photoUrl, photoTitle, articleId }) => {
  return (
    <div className="article-card">
      <img src={photoUrl} alt={photoTitle} />
      <Link href={`/a/${articleId}`}>
        <p className="emphasis">{title}</p>
      </Link>
    </div>
  )
}

export default FeaturedArticles
