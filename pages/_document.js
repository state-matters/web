import { default as NextDoc, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

export default class Document extends NextDoc {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => (
      <StyleSheetManager sheet={sheet.instance}>
        <App {...props} />
      </StyleSheetManager>
    ))
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#8ccbcd" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          {this.props.styles}
          <link
            href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,600,700,900"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css"
          />
          <script
            src="https://d2n4tvy2wsd0oo.cloudfront.net/widget/common/1.3/funraise.min.js"
            type="text/javascript"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
