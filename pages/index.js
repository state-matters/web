import { useRef } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { useSpring, animated, useChain } from "react-spring"
import Link from "next/link"
import Head from "next/head"
import { colors } from "constants"
import Banner from "components/banner"
import Lessons from "components/lessons"
import FeaturedLessons from "components/featured-lessons"
import Footer from "components/footer"
import Container from "components/container"
import client from "prismic-client"
import homeQuery from "queries/home"

const Main = styled.main`
  min-height: 100vh;
  .hero {
    position: relative;
    overflow: hidden;
    padding: 9rem 0 15rem;
    color: ${colors.grey_100};
    background: ${colors.grey_900};
    min-height: 60vh;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  .hero__background {
    position: absolute;
    top: 90%;
    height: 100vh;
    width: 150%;
    left: -25%;
    background: ${colors.grey_100};
  }
  .hero__text {
    font-size: 3rem;
  }
  @media (min-width: 60rem) {
    .hero__text {
      font-size: 4rem;
    }
  }
`

async function getInitialProps() {
  try {
    const { data } = await client.query({
      query: homeQuery
    })
    return { response: data, error: null }
  } catch (error) {
    console.log(error)
    return { response: null, error }
  }
}

const Homepage = ({
  response: {
    home,
    allLessons: { edges: lessons }
  },
  error
}) => {
  const backgroundRef = useRef()
  const contentRef = useRef()
  const backgroundSpring = useSpring({
    from: { top: "0%", transform: "rotate(0deg)" },
    top: "90%",
    transform: "rotate(3deg)",
    ref: backgroundRef
  })
  const contentSpring = useSpring({
    from: { opacity: 0, transform: "scale(1.1)" },
    opacity: 1,
    transform: "scale(1)",
    ref: contentRef
  })
  useChain([backgroundRef, contentRef])
  return (
    <Main>
      <Head>
        <title>State Matters | Track your local government</title>
        <meta name="description" content={RichText.asText(home.hero_title)} />
      </Head>
      <section className="hero">
        <Container>
          <animated.div style={contentSpring}>
            <h1 className="hero__text">{RichText.asText(home.hero_title)}</h1>
            <Link href="/about">
              <a className="block-link">
                <h3>Learn more about us.</h3>
              </a>
            </Link>
          </animated.div>
        </Container>
        <animated.div className="hero__background" style={backgroundSpring} />
      </section>
      {home.banner && (
        <Container>
          <Banner
            photo={home.banner.photo}
            title={home.banner.title}
            body={home.banner.body}
          />
        </Container>
      )}
      <FeaturedLessons featuredLessons={home.featured_lessons} />
      <Lessons lessons={lessons} />
      <Footer />
    </Main>
  )
}

Homepage.getInitialProps = getInitialProps

export default Homepage
