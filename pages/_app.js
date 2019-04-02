import React from "react"
import { default as NextApp, Container } from "next/app"
import BaseStyles from "components/base-styles"
import Header from "components/header"
import SubscriptionModal from "components/subscription-modal"

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    return Component.getInitialProps ? { initialProps: await Component.getInitialProps(ctx) } : {}
  }

  componentDidMount() {
    const funraise = new Funraise({
      id: "63aac56b-8b04-4fe9-aa94-b7a51e8bcd14:4345",
      isPopup: true,
      useDefaultButton: false
    })
    funraise.init()
  }

  render() {
    const { Component, initialProps } = this.props

    return (
      <Container>
        <BaseStyles />
        <Header />
        <Component {...initialProps} />
        <div id="fc-63aac56b4345" style={{ display: "block !important" }} />
        <SubscriptionModal />
      </Container>
    )
  }
}
