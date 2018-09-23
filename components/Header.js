import React, { Fragment } from "react"
import styled from "styled-components"
import { Link, withRouter } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { Grid, Column } from "components/Grid"
import { BlockLink, Button } from "components/TouchTarget"
import Donate from "components/Donate"
import SubscriptionModal from "components/SubscriptionModal"
import theme from "theme"

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  .header__bar {
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    width: 100%;
    background-color: ${({ open }) =>
      open ? "transparent" : theme.colors.grey["900"]};
    z-index: 3;
    .container {
      display: flex;
      align-items: center;
    }
    .logo-link {
      position: relative;
      margin-right: auto;
      max-width: 10rem;
      opacity: ${({ open }) => (open ? 0 : 1)};
      pointer-events: ${({ open }) => (open ? "none" : "intial")};
    }
    .logo-link img {
      width: 100%;
    }
  }
  .nav-menu {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10rem 2rem 2rem;
    background-color: ${theme.colors.grey["900"]};
    color: ${theme.colors.grey["100"]};
    min-height: 75vh;
    height: 100%;
    overflow: auto;
    width: 100%;
    z-index: 2;
    @media (min-width: ${theme.breakPoints.sm}) {
      height: auto;
    }
  }
  .nav-menu-enter {
    opacity: 0.01;
    transform: translateY(-120%);
  }
  .nav-menu-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: 400ms;
  }
  .nav-menu-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .nav-menu-exit-active {
    opacity: 0.01;
    transform: translateY(-120%);
    transition: 400ms;
  }
  .nav-menu__button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 3rem;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    &:hover span:nth-of-type(1n) {
      width: 100%;
    }
    span {
      display: block;
      margin-bottom: 0.5rem;
      height: 2px;
      background-color: ${theme.colors.grey["100"]};
      transition: 200ms;
      width: 100%;
    }
    span:nth-of-type(2) {
      width: 80%;
    }
    span:nth-of-type(3) {
      width: 50%;
    }
  }
  .nav-menu__screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.grey["900"]};
    z-index: 1;
    opacity: 0.6;
  }
  .nav-menu__screen-enter {
    opacity: 0.01;
  }
  .nav-menu__screen-enter-active {
    opacity: 0.6;
    transition: 400ms;
  }
  .nav-menu__screen-exit {
    opacity: 0.6;
  }
  .nav-menu__screen-exit-active {
    opacity: 0.01;
    transition: 400ms;
  }
  .nav-menu__list {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      color: ${theme.colors.grey["500"]};
      margin-top: 2rem;
      .block-link {
        margin-top: 1rem;
      }
    }
  }
`

const MenuLink = styled(Link)`
  color: ${theme.colors.grey["500"]};
  font-family: "Martel", serif;
  font-size: 3rem;
  font-weight: 300;
  &:hover {
    color: ${theme.colors.primary["500"]};
  }
  text-decoration: none;
`

class Header extends React.Component {
  state = { open: false }
  toggleMenu = () =>
    this.setState(state => {
      if (!state.open) document.body.classList.add("no-scroll")
      else document.body.classList.remove("no-scroll")
      return { open: !state.open }
    })
  componentDidUpdate = prev => {
    if (this.props.location !== prev.location) {
      document.body.classList.remove("no-scroll")
      this.setState({ open: false })
    }
  }
  render = () => {
    const { open } = this.state
    return (
      <StyledHeader open={open}>
        <HeaderBar open={open} toggleMenu={this.toggleMenu} />
        <CSSTransition
          classNames="nav-menu__screen"
          timeout={400}
          in={open}
          unmountOnExit
        >
          <div className="nav-menu__screen" />
        </CSSTransition>
        <CSSTransition
          in={open}
          timeout={400}
          classNames="nav-menu"
          unmountOnExit
        >
          <NavMenu />
        </CSSTransition>
      </StyledHeader>
    )
  }
}

const HeaderBar = ({ open, toggleMenu }) => (
  <div className="header__bar">
    <div className="container">
      <Link to="/" className="logo-link">
        <img src="/assets/SM-logo.svg" alt="State Matters Logo" />
      </Link>
      {!open && (
        <Donate>
          {props => (
            <Button {...props} className="primary">
              Donate
            </Button>
          )}
        </Donate>
      )}
      <span className="nav-menu__button" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </span>
    </div>
  </div>
)

class NavMenu extends React.Component {
  render = () => (
    <div className="nav-menu">
      <Grid container>
        <Column sm={12}>
          <h3>
            <MenuLink to="/">StateMatters.org</MenuLink>
          </h3>
          <h4>Chicago, IL</h4>
        </Column>
        <Column sm={3}>
          <ul className="nav-menu__list">
            <li>
              <MenuLink to="/about">About</MenuLink>
            </li>
            <li>
              <MenuLink to="/lessons">Videos</MenuLink>
            </li>
            <li>
              <MenuLink to="/articles">Articles</MenuLink>
            </li>
          </ul>
        </Column>
        <Column sm={5}>
          <ul className="nav-menu__list">
            <li>
              <Donate>
                {props => (
                  <BlockLink {...props} className="block-link">
                    Donate
                  </BlockLink>
                )}
              </Donate>
            </li>
            <li>
              <SubscriptionModal />
            </li>
            <li>
              <BlockLink
                className="block-link"
                href="mailto:info@statematters.org"
              >
                Contact Us
              </BlockLink>
            </li>
          </ul>
        </Column>
      </Grid>
    </div>
  )
}

export default withRouter(Header)
