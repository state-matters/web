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

const Homepage = ({
  document: {
    data: {
      hero_title,
      featured_lessons,
      courses,
      body: [banner]
    }
  },
  lessons
}) => {
  return (
    <Main>
      <Head>
        <title>State Matters | Track your local government</title>
        <meta name="description" content={RichText.asText(hero_title)} />
      </Head>
      <section className="hero">
        <Container>
          <h1 className="hero__text">{RichText.asText(hero_title)}</h1>
          <Link href="/about">
            <a className="block-link">
              <h3>Learn more about us.</h3>
            </a>
          </Link>
        </Container>
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
    padding: 9rem 0 15rem;
    background: ${colors.grey_900};
    color: ${colors.grey_100};
    .container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 40vh;
    }
  }
`

export default Homepage
