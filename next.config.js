const path = require("path")

module.exports = {
  webpack: config => {
    const resolve = {
      alias: {
        constants: path.resolve(__dirname, "constants.js"),
        contentfulClient: path.resolve(__dirname, "createContentfulClient.js"),
        components: path.resolve(__dirname, "components/")
      }
    }

    // Important: return the modified config
    return { ...config, resolve }
  }
}
