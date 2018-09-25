import client from "../../createContentfulClient"
import { Fragment } from "react"

import FeaturedArticles from "components/FeaturedArticles"


export default class Index extends React.Component {
  static async getInitialProps() {
    const getArticles = client.getEntries({
      "sys.id": "4MfPGGWjhYOmgcUSCSAsMq"
    })
    const articles = await Promise.all([getArticles])
    return {
      articles: "articles",
      banner: {
        text: "# hello world"
      }
    }
  }
  render() {
    const { banner, articles } = this.props
    return (
      <Fragment>
        <Header />
        <Hero />
        <Banner>
          <h1>Hello world</h1>
        </Banner>
        <FeaturedArticles articles={articles} />
      </Fragment>
    )
  }
}
