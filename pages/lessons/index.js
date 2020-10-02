import styled from "styled-components"
import { apiUrl, colors } from "@constants"
import Container from "@components/container"

export default function Lessons() {
  return (
    <StyledLessons>
      <Container>
        <h1>Learn you something good.</h1>
      </Container>
    </StyledLessons>
  )
}

Lessons.getInitialProps = async () => {
  try {
    const lessonsQuery = Prismic.Predicates.at("document.type", "lesson")
    const api = await Prismic.api(apiUrl)
    const { results: lessons } = await api.query(lessonsQuery)
    return { lessons }
  } catch (error) {
    return { error }
  }
}

const StyledLessons = styled.main`
  padding: 10rem;
`
