import styled from "styled-components"
import { colors, linkResolver } from "constants"
import { RichText } from "prismic-reactjs"
import client from "prismic-client"
import { gql } from "@apollo/client"
import Link from "next/link"
import MetaTags from "components/meta-tags"
import Container from "components/container"
import Footer from "components/footer"

async function getInitialProps() {
  try {
    const {
      data: { podcast: document }
    } = await client.query({
      query: gql`
        query {
          podcast(uid: "ilinformed", lang: "en-us") {
            hero_title
            description
            episode_list {
              episode {
                _linkType
                ... on Podcast_episode {
                  title
                  summary
                  cover
                  _meta {
                    uid
                  }
                }
              }
            }
            mentions {
              quote
              author
            }
            platforms {
              platform_name
              platform_link {
                _linkType
                ... on _ExternalLink {
                  url
                }
              }
            }
          }
        }
      `
    })
    return { document }
  } catch (error) {
    return { error }
  }
}

const StyledPodcast = styled.main`
  position: relative;
  .content {
    height: 100vh;
  }
  .hero {
    overflow: hidden;
  }
  .hero h1 {
    position: relative;
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
    z-index: 1;
  }
  .hero ${Container} {
    position: relative;
    min-height: 90vh;
    padding-top: 10rem;
    padding-bottom: 4rem;
    display: grid;
    grid-template-columns: min-content auto;
  }
  .hero__image {
    position: absolute;
    grid-column: 2;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    width: 60vw;
    height: 60vw;
    min-width: 40rem;
    min-height: 40rem;
    object-fit: cover;
  }
  .hero__description {
    position: relative;
    padding: 2rem;
    margin-left: -2rem;
    background: ${colors.grey_100};
    grid-column: 1;
    z-index: 1;
  }
  .episodes {
    margin-top: 4rem;
  }
  .episodes__title {
    margin-bottom: 2rem;
  }
  .mention {
    background: ${colors.grey_300};
    padding: 2rem;
    font-style: italic;
    border-radius: 0.25rem;
  }
  .platforms {
    margin-top: 4rem;
    background: ${colors.purple_700};
    color: ${colors.purple_100};
    a {
      color: ${colors.grey_100};
      font-weight: 700;
      text-decoration: none;
      &:hover {
        color: ${colors.purple_500};
      }
    }
    h3 {
      padding: 4rem 0 0;
    }
    .available {
      list-style: none;
      display: grid;
      grid-auto-flow: column;
      padding: 2rem 0 4rem;
      gap: 2rem;
      justify-content: start;
    }
  }
`

const StyledEpisode = styled.article`
  display: grid;
  grid-template-columns: 15rem auto;
  background: ${colors.grey_300};
  gap: 2rem;
  margin-bottom: 4rem;
  border-radius: 0.25rem;
  overflow: hidden;
  .episode__cover {
    position: relative;
    height: 100%;
    grid-row: span 2;
    transition: 100ms;
    &:hover {
      filter: blur(4px);
      &:before {
        position: absolute;
        content: "play";
      }
    }
  }
  .episode__content {
    padding-top: 2rem;
    padding-right: 2rem;
    p {
      font-size: 1.334rem;
    }
    .summary {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`

function Episode({ episode: { title, summary, cover, _meta }, idx }) {
  return (
    <StyledEpisode>
      <Link href={`/ilinformed/${_meta.uid}`}>
        <img src={cover.url} alt={cover.alt} className="episode__cover" />
      </Link>
      <section className="episode__content">
        <h4>{(idx + 1).toString().padStart(2, "0")}</h4>
        <h2>{RichText.asText(title)}</h2>
        <section className="summary">
          <RichText render={summary} linkResolver={linkResolver} />
        </section>
      </section>
    </StyledEpisode>
  )
}

export default function Podcast({
  document: { hero_title, description, episode_list, mentions, platforms },
  error
}) {
  if (error) return <h1>Something went wrong...</h1>
  return (
    <StyledPodcast>
      <MetaTags
        title={RichText.asText(hero_title)}
        description="Listen & Learn about Illinois politics, government and how the heck it all works (or doesn’t) in Springfield with Daniel Biss & Glenance Green."
        image="https://www.statematters.org/images/podcast_header.jpg"
      />
      <section className="hero">
        <Container>
          <h1>IlInformed Podcast</h1>
          <img
            className="hero__image"
            src="/images/podcast_header.jpg"
            alt="Glenance Green and Daniel Biss sit down and share their opinions over coffee."
          />
          <section className="hero__description">
            <RichText render={description} linkResolver={linkResolver} />
          </section>
        </Container>
      </section>
      <Container className="episodes">
        <h3 className="episodes__title">Episodes</h3>
        {episode_list.map(({ episode }, idx) => (
          <Episode key={episode._meta.uid} episode={episode} idx={idx} />
        ))}
      </Container>
      <section className="mentions scroll-container">
        {mentions.map(mention => (
          <article className="scroll-item mention">
            <p key={mention.author}>{mention.quote}</p>
          </article>
        ))}
        <article className="scroll-spacer" />
      </section>
      <section className="platforms">
        <Container>
          <h3>Find us on your favorite platform.</h3>
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
      <Footer className="footer" />
    </StyledPodcast>
  )
}

Podcast.getInitialProps = getInitialProps
