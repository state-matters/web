import { Fragment } from "react"
import client from "contentfulClient"
import Hero from "components/Hero"
import Banner from "components/Banner"
import FeaturedLessons from "components/FeaturedLessons"
import FeaturedArticles from "components/FeaturedArticles"

export default class Index extends React.Component {
  static async getInitialProps() {
    const getArticles = client.getEntries({
      "sys.id": "4MfPGGWjhYOmgcUSCSAsMq"
    })
    const getLessons = client.getEntries({
      "sys.id": "1Y3i4UENnea8eWu04WOsok"
    })
    const [articles, lessons] = await Promise.all([getArticles, getLessons])
    return {
      articles: articles.items[0].fields.entries,
      lessons: lessons.items[0].fields.entries
    }
  }
  render() {
    const { lessons, articles } = this.props
    return (
      <Fragment>
        <Hero />
        <Banner>
          <h1>Hello world</h1>
        </Banner>
        <FeaturedLessons lessons={lessons} />
        <LearnMore />
        <FeaturedArticles articles={articles} />
      </Fragment>
    )
  }
}

const LearnMore = props => <section>learn more</section>
