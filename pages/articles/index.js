import client from "contentfulClient"
import Link from "next/link"

export default class Index extends React.Component {
  static async getInitialProps() {
    const articles = await client.getEntries({ content_type: "article" })
    return {
      articles: articles.items
    }
  }
  render() {
    const { articles } = this.props
    console.log(articles)
    return (
      <ul>
        {articles.map(article => (
          <li>
            <Link
              href={`/articles/show/?id=${article.sys.id}`}
              as={`/a/${article.sys.id}`}
            >
              <a>{article.fields.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}
