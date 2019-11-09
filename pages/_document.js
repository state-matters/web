import { default as NextDoc, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { colors } from "constants"

export default class Document extends NextDoc {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRender = context.renderPage
    try {
      context.renderPage = () =>
        originalRender({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDoc.getInitialProps(context)
      return {
        ...initialProps,
        styles: sheet.getStyleElement()
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={colors.orange_500} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          {this.props.styles}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:200,400,600,800|Vollkorn:400,600,900"
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
