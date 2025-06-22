//app.js

import path from "node:path"
import express from "express"
import { fileURLToPath } from "node:url"
import createMessageRouter from "./routes/messageRouter.js"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }))

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
		id: 0,
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
		id: 1,
	},
]

app.get("/", (req, res) => {
	res.render("index", { messages: messages })
})

app.get("/new", (req, res) => {
	res.render("form")
})

app.post("/new", (req, res) => {
	messages.push({
		text: req.body.text,
		user: req.body.user,
		added: new Date(),
		id: messages.length,
	})
	res.redirect("/")
})

app.use("/messages", createMessageRouter(messages))

app.listen(8000)
