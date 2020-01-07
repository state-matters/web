import React, { Fragment, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import analytics from "react-ga"
import BaseStyles from "components/base-styles"
import Header from "components/header"

function usePageTracker(id, pathname) {
  useEffect(() => {
    analytics.initialize(id)
  }, [id])
  useEffect(() => {
    analytics.set({ page: pathname })
    analytics.pageview(pathname)
  }, [pathname])
}

function useServiceWorker(workerPath) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          await navigator.serviceWorker.register(workerPath)
        } catch (err) {
          console.log(err)
        }
      })
    }
  }, [])
}

export default function App({ Component, pageProps }) {
  const funraise = useRef(null)
  const { pathname } = useRouter()
  usePageTracker("UA-112946294-1", pathname)
  // useServiceWorker("/sw.js")
  useEffect(() => {
    if (window) {
      funraise.current = new Funraise({
        id: "63aac56b-8b04-4fe9-aa94-b7a51e8bcd14:4345",
        isPopup: true,
        useDefaultButton: false
      })
      funraise.current.init()
    }
  }, [])
  return (
    <Fragment>
      <BaseStyles />
      <Header />
      <Component {...pageProps} />
      <div id="fc-63aac56b4345" style={{ display: "block !important" }} />
    </Fragment>
  )
}
