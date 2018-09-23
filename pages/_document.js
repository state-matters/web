import Document, { Head, Main, NextScript } from "next/document"

const getFacebookCrap = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("This is a cool facebook thing")
    }, 1000)
  })

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const result = await getFacebookCrap()
    return { ...initialProps, result }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <meta name="og:title" content={this.props.result} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
