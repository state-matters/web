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
          <meta name="theme-color" content="#f37e5a" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.png" />
          {this.props.styles}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:200,400,700,900|Vollkorn:400,600,700,900"
          />
          <link
            rel="stylesheet"
            href="https://cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css"
          />
          <script
            type="text/javascript"
            src="https://d2n4tvy2wsd0oo.cloudfront.net/widget/common/1.3/funraise.min.js"
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
