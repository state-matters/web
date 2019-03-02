import React from "react"
import { default as NextApp, Container } from "next/app"
import BaseStyles from "components/base-styles"

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    return Component.getInitialProps ? { initialProps: await Component.getInitialProps(ctx) } : {}
  }

  render() {
    const { Component, initialProps } = this.props

    return (
      <Container>
        <BaseStyles />
        <Component {...initialProps} />
      </Container>
    )
  }
}
