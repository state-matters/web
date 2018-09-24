import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags,
    }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="stylesheet" href="/static/base.css" />
          <link
            rel="stylesheet"
            href="https://cdn.materialdesignicons.com/2.6.95/css/materialdesignicons.min.css"
          />
          <title>State Matters | Understand Your Local Government</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
