import gql from "graphql-tag"

export default gql`
  {
    home(uid: "home-page", lang: "en-us") {
      hero_title
      banner {
        _linkType
        ... on Banner {
          title
          body
          photo
        }
      }
      featured_lessons {
        lesson {
          _linkType
          ... on Lesson {
            title
            poster
            _meta {
              uid
            }
          }
        }
      }
    }
    allLessons {
      edges {
        node {
          title
          _meta {
            tags
            uid
          }
        }
      }
    }
  }
`
