import { withRouter } from "next/router"
import client from "../../createContentfulClient"

const Article = ({ router }) => {
  console.log(router)
  return <h1>Hello there</h1>
}

Article.getInitialProps = async () => {
  // const article = client.getEntry()
  // return { article }
  return {}
}

export default withRouter(Article)
