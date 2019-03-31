import styled from "styled-components"
import { colors, apiUrl } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import Link from "next/link"
import Banner from "components/banner"
import FeaturedLessons from "components/featured-lessons"
import Courses from "components/courses"
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
  }
}) => {
  return (
    <Main>
      <section className="hero">
        <Container>
          <h1>{RichText.render(hero_title)}</h1>
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
      <FeaturedLessons featuredLessons={featured_lessons} />
      <Courses courses={courses} />
      <Footer />
    </Main>
  )
}

Homepage.getInitialProps = async () => {
  try {
    const api = await Prismic.api(apiUrl)
    const document = await api.getSingle("home", { fetchLinks: ["member.name", "member.photo"] })
    return { document }
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
