import styled from "styled-components"
import MetaTags from "components/meta-tags"
import Container from "components/container"
import Footer from "components/footer"
import { colors, apiUrl, smoothGradient } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"

export default function Podcast({
  document: {
    data: { hero_title, description, podcast_embed, links }
  }
}) {
  return (
    <StyledPodcast>
      <MetaTags
        title={RichText.asText(hero_title)}
        description={"Listen & Learn about Illinois politics, government and how the heck it all works (or doesn’t) in Springfield with Daniel Biss & Glenance Green."}
        image="https://www.statematters.org/static/podcast_header.jpg"
      />
      <section className="hero">
        <Container>
          <img className="hero__logo" src="/static/ilinformed_logo.png" alt="" />
        </Container>
      </section>
      <section className="description">
        <Container>
          <div className="copy">{RichText.render(description)}</div>
          <img className="banner" src="/static/podcast_banner.jpg" alt="" />
          <iframe className="embed" src={podcast_embed.embed_url} frameBorder="0" scrolling="no" />
        </Container>
      </section>
      <section className="links">
        <Container>
          <h2>Listen</h2>
          <ul className="available">
            {links.map(({ podcast_link, link_title }, i) => (
              <li key={i} className="link">
                <a target={podcast_link.target} href={podcast_link.url}>
                  {link_title}
                </a>
              </li>
            ))}
            <li className="link">Basically anywhere...</li>
          </ul>
        </Container>
      </section>
      <Footer />
    </StyledPodcast>
  )
}

Podcast.getInitialProps = async function() {
  try {
    const api = await Prismic.api(apiUrl)
    const document = await api.getSingle("podcast")
    return { document }
  } catch (error) {
    return { error }
  }
}

const StyledPodcast = styled.main`
  position: relative;
  .hero {
    background-image: linear-gradient(${smoothGradient({ red: 255, green: 253, blue: 252 })}),
      url("/static/podcast_header.jpg");
    background-size: cover;
    background-position: center;
    ${Container} {
      min-height: 60vh;
      padding-top: 10rem;
      padding-bottom: 6rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    .hero__logo {
      width: 100%;
      max-width: 40rem;
    }
    .hero__title {
      font-size: 4rem;
      font-weight: 700;
      color: ${colors.orange_500};
    }
  }
  .description {
    margin: 5rem 0 4rem;
    position: relative;
    overflow-x: hidden;
    min-height: 62rem;
    .copy {
      margin-top: 10rem;
      max-width: 45rem;
      background: ${colors.grey_100};
      padding: 1rem 2rem;
      border-radius: 4px;
    }
    .banner {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate3d(5%, 0, 0);
      height: 60rem;
      border-radius: 4px;
      box-shadow: 0 12px 12px -12px rgba(0, 0, 0, 0.24);
      z-index: -1;
    }
  }
  .embed {
    margin-top: 4rem;
    width: 100%;
  }
  .links {
    background: ${colors.purple_900};
    color: ${colors.grey_100};
    padding: 4rem 0 8rem;
    a {
      color: ${colors.purple_100};
      text-decoration: none;
      &:hover {
        color: ${colors.purple_300};
      }
    }
    .available {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      .link {
        flex: 0 0 auto;
        margin-top: 2rem;
        font-size: 2rem;
      }
      .link:not(:last-of-type) {
        margin-right: 2rem;
      }
    }
  }
  @media (min-width: 80rem) {
    .hero {
      ${Container} {
        min-height: 90vh;
      }
      .hero__title {
        font-size: 7rem;
      }
    }
    .embed {
      margin-left: 2rem;
      width: calc(100% - 2rem);
    }
  }
`
