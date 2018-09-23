import Document, {Head, Main, NextScript} from "next/document"
import {ServerStyleSheet} from 'styled-components'

const getFacebookCrap = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("This is a cool facebook thing")
  }, 1000)
})

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const result = await getFacebookCrap()
    return {
      ...page,
      styleTags,
      result
    }
  }

  render() {
    return (<html>
      <Head>
        {this.props.styleTags}
        <meta name="og:title" content={this.props.result}/>
      </Head>
      <body className="custom_class">
        <Main/>
        <NextScript/>
      </body>
    </html>)
  }
}
