import React, { Fragment } from "react"
import { default as NextApp } from "next/app"
import BaseStyles from "components/base-styles"
import Header from "components/header"
import analytics from "react-ga"

export default class App extends NextApp {
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
          await navigator.serviceWorker.register("/sw.js")
        } catch (err) {
          console.log(err)
        }
      })
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <BaseStyles />
        <Header />
        <Component {...pageProps} />
        <div id="fc-63aac56b4345" style={{ display: "block !important" }} />
      </Fragment>
    )
  }
}
