require("dotenv").config()

module.exports = {
  target: "serverless",
  env: {
    MAIL_API_KEY: process.env.MAIL_API_KEY
  }
}
