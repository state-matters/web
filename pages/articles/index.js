import { Fragment } from "react"
import client from "../../createContentfulClient"
import Link from "next/link"
import FeaturedArticles from "components/FeaturedArticles"
import GenericList from "components/GenericList"
import ArticleCard from "components/ArticleCard"

export default class Articles extends React.Component {
  static async getInitialProps() {
    const articles = await client.getEntries({ content_type: "article" })
    console.log(articles.items);
    return {
      articles: articles.items
    }
  }



  render () {

    return (
      <Fragment>
      <GenericList items={this.props.articles} value="title"/>
      <GenericList items={this.props.articles} value={this.props.articles.contributor}/>

      </Fragment>
    )
  }
}
