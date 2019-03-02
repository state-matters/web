import styled from "styled-components"
import { colors } from "constants"

export default props => {
  return (
    <Main>
      <h1>React Boilerplate</h1>
    </Main>
  )
}

const Main = styled.main`
  min-height: 100vh;
  text-align: center;
  h1 {
    padding: 5rem 3rem 3rem;
    background: ${colors.black};
  }
`
