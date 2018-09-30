import styled from "styled-components"
import { colors } from "../constants"

const Card = styled.div.attrs({
  className: "state-card"
})`
  position: relative;
  padding: ${({ padding }) => padding}rem;
  background-color: ${({ background }) => background};
  border: 1px solid black;
`

Card.defaultProps = {
  padding: 1,
  background: colors.grey_100
}

export default Card
