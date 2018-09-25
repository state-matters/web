import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 0;
  min-height: calc(100vh - 48px);
`

const NotFound = props => (
  <Wrapper>
    <h1>
      We cannot find what<br />you're looking for
    </h1>
    <h3>
      Perhaps you'd like to go <a href="#">back to the page</a> you came from or
      go <a href="/">home</a>.
    </h3>
  </Wrapper>
)

export default NotFound
