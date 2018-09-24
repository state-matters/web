import styled from "styled-components"
import Link from "next/link"
import { withRouter } from "next/router"

const Header = ({ router }) => (
  <HeaderWrapper isHome={router.pathname === "/"}>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/articles">
        <a>Articles</a>
      </Link>
      <Link href="/lessons">
        <a>Lessons</a>
      </Link>
    </nav>
  </HeaderWrapper>
)

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 2rem;
  nav {
    display: flex;
    margin-left: auto;
    a {
      color: ${({ isHome }) => (isHome ? "white" : "inherit")};
    }
    a:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
`

export default withRouter(Header)
