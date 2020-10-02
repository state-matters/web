import React from "react"
import styled from "styled-components"

export default ({ author }) => {
  return (
    <Author>
      <img src={author.photo.url} className="author__photo" alt={`${author.name}'s photo`} />
      <p className="author__name">{author.name}</p>
    </Author>
  )
}

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
    margin-top: 0;
    margin-left: 1rem;
  }
`
