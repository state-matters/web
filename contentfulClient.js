import { createClient } from "contentful"

const options =
  process.env.NODE_ENV !== "production"
    ? {
        space: "021ulla0m5co",
        accessToken:
          "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0",
        host: "preview.contentful.com"
      }
    : {
        space: "021ulla0m5co",
        accessToken:
          "6bd6e5edf50206eb6e65f7a6feb5959b38facca343395776a2593dd48806b329"
      }

export default createClient(options)
