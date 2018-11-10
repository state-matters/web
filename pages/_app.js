import React from "react"
import analytics from "react-ga"
import styled from "styled-components"
import { default as Next, Container } from "next/app"
import Head from "next/head"
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
export default class App extends Next {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  componentDidMount() {
    if (!window.hasAnalytics) {
      analytics.initialize("UA-112946294-1")
      window.hasAnalytics = true
    }
    analytics.set({ page: window.location.pathname })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>State Matters | Understand Your Local Government</title>
        </Head>
        <AppLayout>
          <Header />
          <main className="content">
            <Component {...pageProps} />
          </main>
          <Footer />
        </AppLayout>
      </Container>
    )
  }
}
