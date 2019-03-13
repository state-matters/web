import styled from "styled-components"

export default styled.div`
  max-width: ${({ width = 72 }) => width}rem;
  margin: 0 auto;
  padding: 0 2rem;
  transition: width 200ms;
`
