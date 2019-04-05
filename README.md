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

#### \_document.js

This file extends the html that nextjs server renders for us. Here we include any third party js or css files and analytics. It's also responsible for compiling our styled-components into a set of styles that are injected into the `<head/>` of the document.

#### \_app.js

This extends the base app file that nextjs generates. Here is where we render components that aren't going to reload when navigating around the app like the header and donation modules.

### getInitialProps

Get initial props is how we preload information for the user. This makes page load times super speedy and gives us the added benefit of not having to mess around with state to fetch data. A `getInitialProps` method is **only available on page level components**. It's signature requires an object to be returned.

```javascript
Page.getInitalProps = async function() {
  // sudo code for how we fetch documents from our CMS.
  // Prismic is covered in more detail below.
  const api = await Prismic.api("https://cms.io")
  const document = await api.getSingle("page")
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

Prismic is a headless cms. The team has built a library of helper functions for react apps that we're using along with their basic javascript package.

`prismic-javascript prismic-react`

I mentioned above that the code was sudo-code but it's not far off from what we actually do.

```url
# Base URL
https://statematters.cdn.prismic.io/api/v2
```

The above url will only return published documents. If you're wanting to build a preview site for members of State Matters you'll need to reach out to an admin of this org.

```javascript
// here we get the most current version of the api
const api = await Prismic.api(apiUrl)
// and then we simply call for a single page and await a document in return.
// this document will be an object with all the fields the content team has filled out.
const document = await api.getSingle("about_page", {
  fetchLinks: ["member.name", "member.title"]
})
```

**For further reading on Prismic and all their awesome api's please check out the [official docs](https://prismic.io/docs)**

### API

We don't use a server per-say but serverless functions that operate in much the same way. The only endpoint currently available is `/subscribe` which takes a `PUT` request with a body of

```json
{
  "name": "Full Name",
  "email": "email@email.com"
}
```
