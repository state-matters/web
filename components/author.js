import React from "react"
import styled from "styled-components"

export default ({ url, alt, name }) => (
  <Author>
    <img src={url} alt={alt} className="author__photo" />
    <p className="author__name">{name}</p>
  </Author>
)

const Author = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  .author__photo {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
  }
  .author__name {
    margin-left: 1rem;
  }
`
