import React, { forwardRef } from "react"
import styled from "styled-components"
import { colors } from "constants"

const Input = forwardRef((props, ref) => {
  return (
    <Label {...props}>
      <input type="text" ref={ref} value={props.value} onChange={props.onChange} />
      <span className="label">{props.label}</span>
    </Label>
  )
})

const Label = styled.label`
  position: relative;
  overflow: auto;
  display: inline-block;
  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    display: block;
    padding: 2rem;
    border: 2px solid ${colors.grey_500};
    border-radius: 4px;
  }
`

export default Input
