import styled from "styled-components"
import { colors, apiUrl } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import Footer from "components/footer"

const About = ({ document }) => (
  <StyledAbout>
    <section className="about-us">
      <div className="container">{RichText.render(document.data.about_us)}</div>
    </section>
    <section className="vision">
      <div className="container">
        <h2>Vision</h2>
        {RichText.render(document.data.vision)}
      </div>
    </section>
    <section className="values">
      <div className="container">
        <h2>Values</h2>
      </div>
    </section>
    <section className="team">
      <div className="container">
        <h2>Team</h2>
      </div>
    </section>
    <section className="advisory-board">
      <div className="container">
        <h2>Advisory Board</h2>
      </div>
    </section>
    <Footer />
  </StyledAbout>
)

About.getInitialProps = async () => {
  try {
    const api = await Prismic.api(apiUrl)
    const document = await api.getSingle("about_page")
    console.log(document)
    return { document }
  } catch (error) {
    return { error }
  }
}

export default About

const StyledAbout = styled.main`
  position: relative;
  .about-us {
    padding: 10rem 0 4rem;
    background: ${colors.grey_300};
  }
  .vision {
    padding: 4rem 0;
    background: ${colors.purple_500};
    color: ${colors.grey_100};
  }
`
