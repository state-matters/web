import styled from "styled-components"
import { colors } from "../constants"
import Link from "next/link"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  color: ${colors.grey_300};
  min-height: 50rem;
  .left {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${colors.grey_900};
    @media (min-width: 70rem) {
      display: flex;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${colors.purple_500};
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${colors.grey_500};
    li {
      margin-top: 2rem;
    }
  }
  .social-icons {
    display: flex;
    margin-top: 2rem;
    li:not(:last-of-type) {
      margin-right: 2rem;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: ${colors.grey_900};
    }
    a {
      color: ${colors.grey_100};
    }
    .mdi {
      font-size: 2rem;
    }
  }
  @media (min-width: 70rem) {
    grid-template-columns: 40% 1fr;
  }
`

const FooterLink = styled.a`
  color: ${colors.grey_700};
  font-family: "Martel", serif;
  font-size: 3rem;
  font-weight: 300;
  &:hover {
    color: ${colors.orange_500};
  }
`

export default class Footer extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.form.submit()
  }
  render = () => {
    return (
      <StyledFooter>
        <div className="left">
          <div className="content">
            <Link href="/">
              <FooterLink>
                <h3>State Matters</h3>
              </FooterLink>
            </Link>
            <h4>Chicago, IL</h4>
            <ul>
              <li>
                <Link href="/about">
                  <FooterLink>About</FooterLink>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <FooterLink>Articles</FooterLink>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h3>
              Let’s work together <br /> to understand state government
            </h3>
            <ul>
              <li>Donate</li>
              <li>Subscribe</li>
              <li>Contact us</li>
            </ul>
            <ul className="social-icons">
              <li className="icon">
                <Link href="https://twitter.com/state_matters">
                  <span className="mdi mdi-twitter" />
                </Link>
              </li>
              <li className="icon">
                <Link href="https://www.instagram.com/statematters/">
                  <span className="mdi mdi-instagram" />
                </Link>
              </li>
              <li className="icon">
                <Link href="https://www.facebook.com/statematters/">
                  <span className="mdi mdi-facebook" />
                </Link>
              </li>
              <li className="icon">
                <Link href="https://www.youtube.com/channel/UCrYUXeENK2eSIVT1o7036Ig">
                  <span className="mdi mdi-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </StyledFooter>
    )
  }
}
