import { withRouter } from "next/router"

const Lessons = ({ router }) => {
  console.log(router)
  return <h1>Hello there</h1>
}

Lessons.getInitialProps = async () => {
  return {}
}

export default withRouter(Lessons)
