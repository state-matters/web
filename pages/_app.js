import React from "react"
import { default as NextApp, Container } from "next/app"
import BaseStyles from "components/base-styles"
import Header from "components/header"
import analytics from "react-ga"

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    return Component.getInitialProps
      ? { initialProps: await Component.getInitialProps(ctx) }
      : {}
  }

  componentDidMount() {
    const funraise = new Funraise({
      id: "63aac56b-8b04-4fe9-aa94-b7a51e8bcd14:4345",
      isPopup: true,
      useDefaultButton: false
    })
    funraise.init()
    if (!window.GA_INITIALIZED) {
      analytics.initialize("UA-112946294-1")
      window.GA_INITIALIZED = true
    }
    analytics.set({ page: window.location.pathname })
    analytics.pageview(window.location.pathname)
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js")
          console.log("service worker has loaded with", registration)
        } catch {
          console.log("fuck off")
        }
      })
    }
  }

  render() {
    const { Component, initialProps } = this.props

    return (
      <Container>
        <BaseStyles />
        <Header />
        <Component {...initialProps} />
        <div id="fc-63aac56b4345" style={{ display: "block !important" }} />
      </Container>
    )
  }
}
