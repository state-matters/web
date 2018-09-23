require("dotenv").config()

const express = require("express")
const next = require("next")
const compression = require("compression")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handler = app.getRequestHandler()
const port = process.env.PORT || 3000

const serve = () => {
  const server = express()
  server.use(compression())
  server.get("/l/:lesson_id", (req, res) =>
    app.render(req, res, "/lessons", { id: req.params.lesson_id })
  )
  server.get("/a/:article_id", (req, res) =>
    app.render(req, res, "/articles", { id: req.params.lesson_id })
  )
  server.get("*", handler)
  server.listen(port, err => {
    if (err) throw err
  })
}

app
  .prepare()
  .then(serve)
  .catch(err => console.error(err))
