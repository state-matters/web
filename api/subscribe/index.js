const express = require("express")
const axios = require("axios")

const app = express()

app.use(express.json())

const mailchimpUrl = "https://us17.api.mailchimp.com/3.0/lists/ea066b0443/members"

app.post("*", async (req, res) => {
  if (!req.body.email || !req.body.name) {
    res.send(422, { error: "Need name and email to subscribe" })
  }
  try {
    await axios({
      method: "post",
      url: mailchimpUrl,
      auth: {
        username: "state_matters",
        password: process.env.MAIL_API_KEY
      },
      data: JSON.stringify({
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
          NAME: req.body.name
        }
      })
    })
    res.status(200).json({ name: req.body.name })
  } catch (error) {
    res.status(500).json({ error: error.response.data.detail })
  }
})

module.exports = app
