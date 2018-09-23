import { Fragment } from "react"
import Hero from "../components/Hero"
import client from "../createContentfulClient"

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
    return (
      <Fragment>
        <Header />
        <Hero />
        <Banner />
        <FeaturedLessons lessons={this.props.lessons} />
        <FeaturedArticles articles={this.props.articles} />
        <Footer />
      </Fragment>
    )
  }
}

const Header = props => <header>header</header>

const Banner = props => <aside>Banner</aside>

const FeaturedLessons = props => <section>FeaturedLessons</section>

const FeaturedArticles = props => <section>FeaturedArticles</section>

const Footer = props => <footer>Footer</footer>
