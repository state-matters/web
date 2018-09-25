import client from "../../createContentfulClient"
import Link from "next/link"
import FeaturedArticles from "components/FeaturedArticles"

export default class Articles extends React.Component {
  static async getInitialProps() {
    const articles = await client.getEntries({ content_type: "article" })
    return {
      articles: articles.items
    }
  }



  render () {
    return (
      <div>
       <FeaturedArticles articles={this.articles} />
      </div>
    )
  }
}
