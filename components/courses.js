import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import { RichText } from "prismic-reactjs"
import Author from "components/author"

const Courses = ({ data }) => (
  <StyledCourses>
    <div className="container">
      <h4 className="title">Courses</h4>
      {data.map(course => {
        console.log(course)
        return (
          <Course key={course.course.id} url={course.cover_photo.url}>
            {RichText.render(course.title)}
            <h4>12 Lessons</h4>
            <Author url={course.cover_photo.url} alt="Some alt text" name="Kacie Smith" />
            <div className="poster" />
          </Course>
        )
      })}
    </div>
  </StyledCourses>
)

const StyledCourses = styled.section`
  margin: 4rem 0;
  .title {
    margin-bottom: 2rem;
    color: ${colors.grey_700};
  }
`

const Course = styled.div`
  position: relative;
  padding: 2rem;
  background: ${colors.orange_100};
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
  .poster {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20rem;
    background-image: linear-gradient(97.5deg, rgba(255, 217, 205, 1) 15%, rgba(255, 217, 205, 0)),
      url(${({ url }) => url});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`

export default Courses
