import Head from 'next/head'
import Wrapper from './Wrapper'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Fragment } from "react"

export default ({ children, title = 'This is the default title' }) => (
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
