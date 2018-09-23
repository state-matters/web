import styled from "styled-components"
import Link from "next/link"

export default () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/lessons">Lessons</Link>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 2rem;
  nav {
    display: flex;
    margin-left: auto;
    a:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
`
