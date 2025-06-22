import path from "node:path"
import express from "express"
import { fileURLToPath } from "node:url"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
]

app.get("/", (req, res) => {
	res.render("index", { messages: messages })
})

app.get("/new", (req, res) => {
	res.render("form")
})

app.listen(3000)
