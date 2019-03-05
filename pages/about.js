import styled from "styled-components"
import { colors } from "constants"
import Footer from "components/footer"

export default props => (
  <About>
    <section className="mission">
      <div className="container">
        <h2>Who is State Matters?</h2>
        <h1 className="title">
          We are an eclectic group of artists, designers, developers, policy wonks and writers.
        </h1>
        <h4>
          We founded State Matters in 2017 to make Illinois government clear and unintimidating. We
          believe that civic knowledge is the bedrock of a thriving democracy. As a nonpartisan
          educational organization, our agenda is to engage, educate, and inspire — regardless of
          who you are or where you’re coming from.
        </h4>
        <h4>
          At first, we were just looking for some basic answers about how the state worked (or
          didn’t work). But our state government is dense with bureaucracy and the existing online
          resources were either too biased, too superficial, or flew right over our heads. When we
          couldn’t find what we were looking for, we built it ourselves.
        </h4>
      </div>
    </section>
    <section className="roadmap">
      <div className="container">
        <h4>What we do.</h4>
        <h2>We create high quality videos that:</h2>
        <p>Explain how state and local government in Illinois operates.</p>
        <p>Explain the most impactful, state legislation being proposed in Springfield.</p>
        <p>Help folks engage with their legislators and elected officials.</p>
      </div>
    </section>
    <section className="about__contribute">
      <div className="container">
        <h2>
          Our team is up for a challenge and we’re always adding new voices and perspectives to our
          team.
        </h2>
      </div>
    </section>
    <Footer />
  </About>
)

const About = styled.main`
  position: relative;
  .mission {
    padding: 10rem 0 4rem;
    background: ${colors.grey_300};
    .title {
      margin: 2rem 0 7rem;
    }
    h4:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
  .roadmap {
    padding: 4rem 0;
    h2 {
      margin-bottom: 2rem;
    }
    p:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
  .about__contribute {
    margin: 4rem 0;
  }
  .about__contribute .container {
    background: ${colors.orange_100};
    padding: 4rem 2rem;
  }
`
