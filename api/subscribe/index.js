const express = require("express")
const axios = require("axios")

const app = express()

app.use(express.json())

const mailchimpUrl = "https://us17.api.mailchimp.com/3.0/lists/ea066b0443/members"

app.post("*", async (req, res) => {
  const { first, last, email } = req.body
  if (!email) {
    res.send(422, { error: "Email needed to subscribe" })
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
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last
        }
      })
    })
    res.status(200).json({ name: `${first} ${last}` })
  } catch (error) {
    res.status(500).json({ error: error.data.detail })
  }
})

module.exports = app
