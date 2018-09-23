import client from "../../createContentfulClient"
import Link from "next/link"

const Articles = props => (
  <section className="articles">
    {props.allArticles.map(article => (
      <li key={article.sys.id}>
        <Link
          as={`/a/${article.sys.id}`}
          href={`/articles/show?id=${article.sys.id}`}
        >
          <a>{article.fields.title}</a>
        </Link>
      </li>
    ))}
  </section>
)

Articles.getInitialProps = async () => {
  const allArticles = await client.getEntries({ content_type: "article" })
  return {
    allArticles: allArticles.items
  }
}

export default Articles
