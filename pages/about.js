import styled from "styled-components"
import { colors, apiUrl } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import Footer from "components/footer"
import Container from "components/container"

const About = ({
  document: {
    data: { about_us, vision, team, advisory_board }
  }
}) => (
  <StyledAbout>
    <section className="about-us">
      <Container>{RichText.render(about_us)}</Container>
    </section>
    <section className="vision">
      <Container>
        <h2>Vision</h2>
        {RichText.render(vision)}
      </Container>
    </section>
    <section className="values">
      <Container>
        <h2>Values</h2>
      </Container>
    </section>
    <section className="team">
      <Container>
        <h2>Team</h2>
        <div className="team__members">
          {team.map(member => {
            return (
              <div className="member">
                <p className="name">{member.name}</p>
                <p className="title">{member.title}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
    <section className="advisory-board">
      <Container>
        <h2>Advisory Board</h2>
        <div className="advisory__members">
          {advisory_board.map(member => (
            <div className="board-member">
              <h3>{member.name}</h3>
              <div className="blurb">{RichText.render(member.blurb)}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
    <Footer />
  </StyledAbout>
)

About.getInitialProps = async () => {
  try {
    const api = await Prismic.api(apiUrl)
    const document = await api.getSingle("about_page")
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
    padding: 4rem 0 8rem;
    background: ${colors.purple_500};
    color: ${colors.grey_100};
  }
  .team {
    padding: 4rem 0;
  }
  .team__members {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    .member {
      padding: 2rem;
      background: ${colors.orange_100};
      border-radius: 4px;
      .title {
        font-size: 1rem;
      }
    }
    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 60rem) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .advisory__members {
    columns: 20rem 2;
    padding: 0 0 10rem;
    .board-member {
      display: inline-block;
    }
    .blurb {
      font-size: 1.25rem;
    }
  }
`
