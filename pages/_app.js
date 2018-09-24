import React from "react"
import analytics from "react-ga"
import App, { Container } from "next/app"

class Layout extends React.Component {
  componentDidMount() {
    if (!window.hasAnalytics) analytics.initialize("UA-112946294-1")
    analytics.set({ page: window.location.pathname })
  }
  render() {
    const { children } = this.props
    return children
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
