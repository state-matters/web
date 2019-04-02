import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { createPortal } from "react-dom"
import { withRouter } from "next/router"

function SubscriptionModal({ router }) {
  const [mount, setMount] = useState(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = document.createElement("aside")
    setMount(el)
    document.body.appendChild(el)
  }, [])
  return show ? createPortal(this.props.children, mount) : null
}

export default withRouter(SubscriptionModal)
