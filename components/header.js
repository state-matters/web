import React, { useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"
import { withRouter } from "next/router"
import { colors } from "constants"
import Button from "@statematters/components/button"
import Logo from "components/logo"
import Container from "components/container"

const Header = ({ router: { pathname } }) => {
  const color = pathname === "/" || pathname === "/course" ? colors.grey_100 : colors.grey_900
  // useEffect(() => {
  //   const funraise = new Funraise({
  //     id: "63aac56b-8b04-4fe9-aa94-b7a51e8bcd14:4345",
  //     isPopup: true,
  //     useDefaultButton: false
  //   })
  //   funraise.init()
  // }, [])
  return (
    <StyledHeader>
      <Container width={pathname === "/course" ? 105 : 82}>
        <Link prefetch href="/">
          <a>
            <Logo className="header__logo" color={color} />
          </a>
        </Link>
        <Button data-target="#donateModal-63aac56b4345" data-toggle="modal" bg={colors.orange_500}>
          Donate
        </Button>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem 0;
  width: 100%;
  z-index: 9;
  ${Container} {
    display: flex;
    align-items: center;
  }
  .header__logo {
    cursor: pointer;
  }
  ${Button} {
    margin-left: auto;
    border-radius: 4px;
    font-family: "Poppins";
    letter-spacing: 1px;
  }
`

export default withRouter(Header)
