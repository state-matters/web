import { Fragment } from "react"
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'


export default ({ children, title = 'default title' }) => (
  <Fragment>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Header />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      Footer
    </Footer>
  </Fragment>
)
