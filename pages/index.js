import styled from "styled-components"
import { colors, apiUrl } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import Link from "next/link"
import Head from "next/head"
import Banner from "components/banner"
import Lessons from "components/lessons"
import FeaturedLessons from "components/featured-lessons"
// import Courses from "components/courses"
import Footer from "components/footer"
import Container from "components/container"
import { useSpring, animated, config } from "react-spring"

const Homepage = ({
  document: {
    data: {
      hero_title,
      featured_lessons,
      courses, // We're not using courses right now.
      body: [banner]
    }
  },
  lessons
}) => {
  const backgroundSpring = useSpring({
    from: { top: "0%", transform: "rotate(0deg)" },
    top: "90%",
    transform: "rotate(3deg)",
    config: config.slow
  })
  const contentSpring = useSpring({
    from: { opacity: 0, transform: "scale(1.1)" },
    opacity: 1,
    transform: "scale(1)",
    delay: 400,
    config: config.gentle
  })
  return (
    <Main>
      <Head>
        <title>State Matters | Track your local government</title>
        <meta name="description" content={RichText.asText(hero_title)} />
      </Head>
      <section className="hero">
        <Container>
          <animated.div style={contentSpring}>
            <h1 className="hero__text">{RichText.asText(hero_title)}</h1>
            <Link href="/about">
              <a className="block-link">
                <h3>Learn more about us.</h3>
              </a>
            </Link>
          </animated.div>
        </Container>
        <animated.div className="hero__background" style={backgroundSpring} />
      </section>
      {banner && (
        <Container>
          <Banner data={banner.primary} />
        </Container>
      )}
      {/* FEATURED LESSONS */}
      <FeaturedLessons featuredLessons={featured_lessons} />

      {/* ALL LESSONS */}
      <Lessons lessons={lessons} />

      {/* {courses.length ? <Courses courses={courses} /> : null} */}
      <Footer />
    </Main>
  )
}

Homepage.getInitialProps = async () => {
  try {
    const api = await Prismic.api(apiUrl)
    const lessonsQuery = Prismic.Predicates.at("document.type", "lesson")
    const fetchHomepage = api.getSingle("home", { fetchLinks: ["lesson.poster", "lesson.title"] })
    const fetchLessons = api.query(lessonsQuery)
    const [document, { results: lessons }] = await Promise.all([fetchHomepage, fetchLessons])
    return { document, lessons }
  } catch (error) {
    return { error }
  }
}

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

export default Homepage
