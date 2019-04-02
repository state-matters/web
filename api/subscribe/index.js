const express = require("express")

const app = express()

app.use(express.json())

app.post("*", (req, res, next) => {
  if (!req.params.name || !req.params.email) {
    res.status(422).json({ error: "Need name and email to subscribe" })
  }
  res.status(200).json({ email: req.params.email })
})

module.exports = app
