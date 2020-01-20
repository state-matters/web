import { PrismicLink } from "apollo-link-prismic"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://statematters.prismic.io/graphql"
  }),
  cache: new InMemoryCache()
})

export default client
