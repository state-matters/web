import { withRouter } from "next/router"

const Lessons = ({ router }) => {
  return <h1>Hello {router.query.id}</h1>
}

Lessons.getInitialProps = async ctx => {
  console.log(ctx)
  return {}
}

export default withRouter(Lessons)
