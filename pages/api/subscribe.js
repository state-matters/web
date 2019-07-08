const axios = require("axios")

const mailchimpUrl = "https://us17.api.mailchimp.com/3.0/lists/ea066b0443/members"

export default async function handle(req, res) {
  const { first, last, email } = req.body
  if (!email) {
    res.status(422).json({ message: "Must include an email in the request body." })
  }
  try {
    await axios({
      method: "post",
      url: mailchimpUrl,
      auth: {
        username: "state_matters",
        password: process.env.MAIL_API_KEY
      },
      data: {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last
        }
      }
    })
    res.status(200).json({ name: `${first} ${last}` })
  } catch (error) {
    const status = 500
    res.status(status).json({ error })
  }
}
