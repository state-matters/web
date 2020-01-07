import styled from "styled-components"
import MetaTags from "components/meta-tags"
import Container from "components/container"
import Footer from "components/footer"
import { colors, apiUrl, smoothGradient } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"

const StyledPodcast = styled.main`
  position: relative;
  .content {
    height: 100vh;
  }
  .hero {
    background-image: linear-gradient(
        ${smoothGradient({ red: 255, green: 253, blue: 252 })}
      ),
      url("/images/podcast_header.jpg");
    background-size: cover;
    background-position: center;
  }
  .hero ${Container} {
    min-height: 90vh;
    padding-top: 10rem;
    padding-bottom: 4rem;
    display: grid;
  }
  .hero__logo {
    width: 100%;
    max-width: 40rem;
    align-self: end;
    justify-self: center;
  }
`

async function getInitialProps() {
  try {
    const client = Prismic.client(apiUrl)
    const document = await client.getSingle("podcast")
    return { document }
  } catch (error) {
    return { error }
  }
}

function Episode({ episode }) {
  console.log(episode)
  return <h2>Podcast Episode</h2>
}

export default function Podcast({
  document: { hero_title, episode_list },
  error
}) {
  return (
    <StyledPodcast>
      <MetaTags
        title={RichText.asText(hero_title)}
        description="Listen & Learn about Illinois politics, government and how the heck it all works (or doesn’t) in Springfield with Daniel Biss & Glenance Green."
        image="https://www.statematters.org/images/podcast_header.jpg"
      />
      <section className="hero">
        <Container>
          <img
            className="hero__logo"
            src="/images/ilinformed_logo.png"
            alt="IL Informed | A podcast about Illinois Government"
          />
        </Container>
      </section>
      <section className="episodes">
        {episode_list.map((episode, idx) => (
          <Episode key={idx} episode={episode} />
        ))}
      </section>
      <section className="mentions"></section>
      <section className="platforms"></section>
      <Footer className="footer" />
      {/* <section className="hero">
        <Container>
          <img
            className="hero__logo"
            src="/images/ilinformed_logo.png"
            alt="IL Informed | A podcast about Illinois Government"
          />
        </Container>
      </section>
      <section className="description">
        <Container>
          <div className="copy">{RichText.render(description)}</div>
          <img
            className="banner"
            src="/images/podcast_banner.jpg"
            alt="podcast banner"
          />
        </Container>
      </section>
      <section className="links">
        <Container>
          <h2>Listen</h2>
          <ul className="available">
            {platforms.map(({ platform_link, platform_name }) => (
              <li key={platform_name} className="link">
                <a target="_blank" href={platform_link.url}>
                  {platform_name}
                </a>
              </li>
            ))}
            <li className="link">Basically anywhere...</li>
          </ul>
        </Container>
      </section>
      <Footer /> */}
    </StyledPodcast>
  )
}

Podcast.getInitialProps = getInitialProps
