import React from "react"
import analytics from "react-ga"
import styled from "styled-components"
import App, { Container } from "next/app"
import Header from "components/Header"
import Footer from "components/Footer"

const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .footer {
    margin-top: auto;
  }
`

class Layout extends React.Component {
  componentDidMount() {
    if (!window.hasAnalytics) {
      analytics.initialize("UA-112946294-1")
      window.hasAnalytics = true
    }
    analytics.set({ page: window.location.pathname })
  }
  render() {
    const { children } = this.props
    return (
      <AppLayout>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </AppLayout>
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
