import styled from "styled-components"
import Markdown from "react-markdown"

const BannerWrapper = styled.div`
  margin-top: -4rem;
  padding: 0 1rem;
  .banner__text {
    padding: 2rem;
  }
  .banner__title {
    padding-bottom: 1rem;
  }
`

export default ({ imageUrl, text }) => {
  return (
    <BannerWrapper className="container">
      <div className="card">
        <div className="banner__text">
          <p className="banner__title">Announcement</p>
          <Markdown source={text} />
        </div>
        {imageUrl && <img className="banner__image" src={imageUrl} />}
      </div>
    </BannerWrapper>
  )
}
