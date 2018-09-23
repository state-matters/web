import { Fragment } from "react"
import client from "../createContentfulClient"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import FeaturedLessons from "../components/FeaturedLessons"

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
      lessons: lessons.items[0].fields.entries,
      banner: {
        text: "# hello world"
      }
    }
  }
  render() {
    const { banner, lessons, articles } = this.props
    return (
      <Fragment>
        <Header />
        <Hero />
        <Banner text={banner.text} />
        <FeaturedLessons lessons={lessons} />
        <LearnMore />
        <FeaturedArticles articles={articles} />
        <Footer />
      </Fragment>
    )
  }
}

const LearnMore = props => <section>learn more</section>

const FeaturedArticles = props => <section>FeaturedArticles</section>

const Footer = props => <footer>footer</footer>
