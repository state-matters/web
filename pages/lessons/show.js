import { Fragment } from "react"
import { withRouter } from "next/router"
// import Head from "next/head"

const Lessons = ({ router }) => {
  console.log(router)
  return (
    <Fragment>
      <h1>Hello there</h1>
    </Fragment>
  )
}

Lessons.getInitialProps = async () => {
  return {}
}

export default withRouter(Lessons)
