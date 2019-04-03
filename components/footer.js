import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { colors } from "constants"

export default props => (
  <Footer>
    <div className="about">
      <h2>StateMatters.org</h2>
      <h3>Chicago, IL</h3>
      <Link href="/about">
        <h3 className="footer__link">About</h3>
      </Link>
      <Link href="/courses">
        <h3 className="footer__link">Courses</h3>
      </Link>
      <Link href="/about/team">
        <h3 className="footer__link">Team</h3>
      </Link>
    </div>
    <div className="contribute">
      <h2>Let's work together</h2>
      <h3>to understand state government.</h3>
      <Link href="/">
        <a className="block-link">Donate</a>
      </Link>
      <Link href="/subscribe">
        <a className="block-link">Subscribe to our newsletter</a>
      </Link>
      <Link href="/">
        <a className="block-link">Contact us</a>
      </Link>
    </div>
  </Footer>
)

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  .about,
  .contribute {
    padding: 8rem 4rem;
  }
  .footer__link {
    margin-top: 1.25rem;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      color: ${colors.grey_100};
    }
  }
  .about {
    display: none;
    text-align: right;
    background: ${colors.grey_900};
    color: ${colors.grey_500};
    h2 {
      color: ${colors.grey_100};
    }
  }
  .contribute {
    background: ${colors.purple_500};
    color: ${colors.grey_100};
    h3 {
      color: ${colors.orange_300};
    }
    .block-link {
      margin-top: 2rem;
      display: block;
    }
  }
  @media (min-width: 62rem) {
    grid-template-columns: 4fr 5fr;
    .about {
      display: block;
      padding-left: calc(50vw - 34rem);
    }
    .contribute {
      padding-right: calc(50vw - 34rem);
    }
  }
`
