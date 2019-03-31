import styled from "styled-components"
import Head from "next/head"
import Container from "components/container"
import Footer from "components/footer"
import { colors, apiUrl } from "constants"
import Prismic from "prismic-javascript"
import { RichText } from "prismic-reactjs"
import { rgba } from "polished"

export default function Podcast({
  document: {
    data: { hero_title, description, podcast_embed, links }
  }
}) {
  return (
    <StyledPodcast>
      <Head>
        <meta property="og:title" content={RichText.asText(hero_title)} />
        <meta property="og:description" content={RichText.asText(description).substring(0, 50)} />
        <meta property="og:image" content="/static/podcast_header.jpg" />
        <meta name="twitter:title" content={RichText.asText(hero_title)} />
        <meta name="twitter:description" content={RichText.asText(description).substring(0, 50)} />
        <meta name="twitter:image" content="/static/podcast_header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="hero">
        <Container>
          <h1 className="hero__title">{RichText.asText(hero_title)}</h1>
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

const smoothGradient = ({ red, green, blue }) => {
  const colorStops = {
    0: 1,
    19: 0.738,
    34: 0.541,
    47: 0.382,
    56.5: 0.278,
    65: 0.194,
    73: 0.126,
    80.2: 0.075,
    86.1: 0.042,
    91: 0.021,
    95.2: 0.008,
    98.2: 0.002,
    100: 0
  }
  let gradient = ""
  for (let stop in colorStops) {
    gradient += `${rgba({ red, green, blue, alpha: colorStops[stop] })} ${stop}%, `
  }
  return gradient.replace(/(^\s*,)|(,\s*$)/g, "")
}

const StyledPodcast = styled.main`
  position: relative;
  .hero {
    background-image: linear-gradient(
        to top,
        ${smoothGradient({ red: 255, green: 253, blue: 252 })}
      ),
      url("/static/podcast_header.jpg");
    background-size: cover;
    background-position: center;
    ${Container} {
      min-height: 60vh;
      padding-top: 10rem;
      padding-bottom: 4rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    .hero__title {
      font-size: 7rem;
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
    }
    .embed {
      margin-left: 2rem;
      width: calc(100% - 2rem);
    }
  }
`
