import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

const getFacebookCrap = () =>
  new Promise(resolve => resolve("This is a cool facebook thing"))

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    const result = await getFacebookCrap()
    return {
      ...page,
      styleTags,
      result
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/base.css" />
          {this.props.styleTags}
          <link
            rel="stylesheet"
            href="https://cdn.materialdesignicons.com/2.6.95/css/materialdesignicons.min.css"
          />
          <title>State Matters | Understand Your Local Government</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
