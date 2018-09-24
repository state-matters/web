import { withRouter } from "next/router"
import client from "../../createContentfulClient"

const Article = ({ article }) => {
  return <h1>Hello there</h1>
}

Article.getInitialProps = async context => {
  const article = await client.getEntry(context.query.id)
  return { article }
}

export default withRouter(Article)
