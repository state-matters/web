import React, { Fragment } from "react"
import analytics from "react-ga"
import App, { Container } from "next/app"
import Header from "components/Header"
import Footer from "components/Footer"

class Layout extends React.Component {
  componentDidMount() {
    if (!window.hasAnalytics) analytics.initialize("UA-112946294-1")
    analytics.set({ page: window.location.pathname })
  }
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <Header />
        {children}
        <Footer />
      </Fragment>
    )
  }
}

export default class StateMattersApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
