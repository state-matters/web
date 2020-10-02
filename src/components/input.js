import React, { forwardRef, useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { colors } from "@constants"

const Input = forwardRef(
  ({ className, value, onChange, label, initialValue, ...props }, ref) => {
    const [hasValue, setHasValue] = useState(initialValue)
    const handleChange = (e) => {
      if (onChange) onChange(e)
      if (e.target.value.length) setHasValue(true)
      else setHasValue(false)
    }
    useEffect(() => {
      if (value && value.length) setHasValue(true)
    }, [value])
    return (
      <Label className={className} hasValue={hasValue}>
        <input
          type="text"
          ref={ref}
          value={value}
          onChange={handleChange}
          {...props}
        />
        <span className="label">{label}</span>
      </Label>
    )
  },
)

const labelMixin = css`
  font-size: 1.333rem;
  transform: translate3d(0, -1.333rem, 0);
`

const Label = styled.label`
  position: relative;
  overflow: auto;
  display: inline-block;
  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    display: block;
    padding: 3rem 2rem 1rem;
    background: ${colors.grey_300};
    border-bottom: 2px solid ${colors.grey_500};
    border-radius: 4px 4px 0 0;
  }
  .label {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: ${colors.grey_700};
    transition: 100ms;
    ${({ hasValue }) => hasValue && labelMixin}
  }
  input:focus + .label {
    ${labelMixin}
  }
`

export default Input
