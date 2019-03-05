import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { withRouter } from "next/router"
import { colors } from "constants"
import Button from "@statematters/components/button"
import Logo from "components/logo"

const Header = ({ router: { pathname } }) => {
  console.log(pathname)
  const color = pathname === "/" ? colors.grey_100 : colors.grey_900
  return (
    <StyledHeader>
      <div className="container">
        <Link href="/">
          <a>
            <Logo className="header__logo" color={color} />
          </a>
        </Link>
        <Button bg={colors.orange_500}>Dontate</Button>
      </div>
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
  .container {
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
