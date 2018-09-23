import Hero from "../components/Hero"
import { colors } from "../constants"
import { createClient } from "contentful"

export default class extends React.Component {
  static async getInitialProps() {
    const client = createClient({
      space: "021ulla0m5co",
      accessToken:
        "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0",
      host: "preview.contentful.com"
    })
    const data = await client.getEntries()
    return { data }
  }
  render() {
    return (
      <main>
        <Hero />

        <style global jsx>{`
          * {
            box-sizing: border-box;
          }
          :root {
            font-size: 75%;
          }
          body {
            margin: 0;
            padding: 0;
            font-size: 1.5rem;
            font-family: "IBM Plex Mono", monospace;
            background: ${colors.grey_100};
          }
        `}</style>
      </main>
    )
  }
}
