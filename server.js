require("dotenv").config()

const express = require("express")
const next = require("next")
const compression = require("compression")

const isDev = process.env.NODE_ENV !== "production"
const app = next({ dev: isDev })
const handler = app.getRequestHandler()
const port = process.env.PORT || 3000

const serve = () => {
  const server = express()
  if (!isDev) server.use(compression())
  server.get("/l/:lesson_id", (req, res) =>
    app.render(req, res, "/lessons/show", { id: req.params.lesson_id })
  )
  server.get("/a/:article_id", (req, res) =>
    app.render(req, res, "/articles/show", { id: req.params.article_id })
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
