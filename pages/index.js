import Hero from "../components/Hero"
import { colors } from "../constants"
import client from "../createContentfulClient"

export default class Index extends React.Component {
  static async getInitialProps() {
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
