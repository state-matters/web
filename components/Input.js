import React from "react"
import styled from "styled-components"
import theme from "theme"

const InputWrapper = styled.label`
  display: block;
  position: relative;
  width: 100%;
  input[type="text"],
  input[type="email"] {
    padding: 1rem;
    background-color: ${theme.colors.grey["100"]};
    border: none;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    outline: none;
    transition: 200ms ease-in-out;
    width: 100%;
  }
  input[type="text"]:focus,
  input[type="email"]:focus {
    outline: 4px solid ${theme.colors.secondary["500"]};
    outline-offset: 4px;
  }
`

export default class Input extends React.Component {
  static defaultProps = {
    type: "text"
  }
  state = {
    value: ""
  }
  handleChange = e => {
    const eventTarget = e.target
    const value = eventTarget.value
    this.setState({ value })
    this.props.handleChange && this.props.handleChange(eventTarget)
  }
  render = _ => {
    const { props } = this
    return (
      <InputWrapper>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          {...props}
        />
      </InputWrapper>
    )
  }
}
