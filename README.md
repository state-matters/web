# State Matters Web Client

![GitHub release](https://img.shields.io/github/release/state-matters/web.svg)

[Next.js](https://nextjs.org) & [Prismic](https://prismic.io/)

## Setup

```bash
npm install
npm run start:dev
```

## Information Architecure

A `lesson` is the building block of State Matters. We don't write editorial content so our articles should always aim to educate with as little slant as possible. A `lesson` can be an article, a video, an info-graphic or anything really, but it is a digestible, manageable piece of content.

Lessons that have a common thread are wrapped up into a `course` this is usually an evergreen peice of content that we expect users to have a deeper understanding of a broad topic after consuming.

## Code Overview

### Routing

We're using `next` as a framework on top of react which comes with file based routing out of the box. Each file under the `pages` folder with resolve to a url with the same pattern, `pages/about.js` will resolve to a `/about` url. An index.js will resolve to the folder it's in so the `pages/index.js` is the homepage of the site.

**Current Pages**

1. Index Page - `/`
2. About Page - `/about`
3. Subscription Page - `/subscribe`
4. Lesson Index Page - `/lessons`
5. Lesson Show Page - `/lessons/[uid]`
6. Ilinformed Index Page - `/ilinformed`
7. Ilinformed Show Page - `/ilinformed/[uid]`

#### \_document.js

This file extends the html that nextjs server renders for us. Here we include any third party js or css files and analytics. It's also responsible for compiling our styled-components into a set of styles that are injected into the `<head/>` of the document.

#### \_app.js

This extends the base app file that nextjs generates. Here is where we render components that aren't going to reload when navigating around the app like the header and donation modules.

### getInitialProps

Get initial props is how we preload information for the user. This makes page load times super speedy and gives us the added benefit of not having to mess around with state to fetch data. A `getInitialProps` method is **only available on page level components**. It's signature requires an object to be returned.

```javascript
Page.getInitialProps = async function() {
  const { data: document } = await client.query({
    query: gql`
      {
        page(uid: "home-page", lang: "en-us") {
          title
          description
        }
      }
    `
  })
  return { document, color: "green" }
}
```

**For a full overview of nextjs, please read the [official documentation](https://nextjs.org/docs/)**

### Styling

We use `styled-components` to keep everything _composable_ and _extendable_.

Everything in State Matters is using a `12px` base grid. To keep this consistent, unless absolutely necessary **use rem for spacing and sizing**

```javascript
// You can access State Matters color theme by importing it into any file. No relative path needed.
import { colors } from "constants"

// Styled components can use a dot notation with any valid html tag.
const StyledComponent = styled.div`
  color: green;
`
// We can extend the components by wrapping them in another styled instance.
const Extended = styled(StyledComponent)`
  color: red;
`

// Styled components come with sass like nesting baked in.
const StyledPage = styled.main`
  margin-top: 4rem;
  .hero {
    text-align: center;
  }
`
```

### Prismic

Prismic is a headless cms that uses [GraphQL](https://graphql.org/). The team has built a library of helper functions for react apps that we're using.

When the app is bootstrapped, we create an Apollo client in `prismic.js` and export that for usage across the app.

```js
import client from "prismic-client"
import { gql } from "@apollo/client"

// Simply query our data in whatever way we want.
const { data } = await client.query({
  query: gql`
    {
      lessons(first: 5) {
        title
        body
        hero_image
      }
    }
  `
})
```

**For further reading on Prismic and all their awesome APIs please check out the [official docs](https://prismic.io/docs)**
