import styled from "styled-components"
import { colors } from "../constants"
import Slider from "./Slider"
import Video from "./Video"

const FeaturedLessons = ({ lessons }) => {
  return (
    <LessonWrapper className="lessons">
      <h3 className="container">Featured Lessons</h3>
      <Slider>
        {lessons.map(lesson => {
          const { fields } = lesson
          return (
            <Lesson key={lesson.sys.id}>
              <h4>{fields.title}</h4>
              <Video
                src={fields.video.fields.file.url}
                poster={fields.poster.fields.file.url}
              />
            </Lesson>
          )
        })}
      </Slider>
    </LessonWrapper>
  )
}

const LessonWrapper = styled.section`
  margin-top: 6rem;
  h3 {
    padding: 0 1rem;
    padding-bottom: 2rem;
  }
`

const Lesson = styled.div`
  position: relative;
  h4 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    color: ${colors.grey_100};
    z-index: 1;
  }
`

export default FeaturedLessons
