import Hero from "../components/Hero"
import { colors } from "../constants"
import Card from "../components/Card"

export default props => (
  <main>
    <Hero />
    <Card />

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
