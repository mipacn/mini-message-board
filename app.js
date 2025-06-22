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

app.get("/", (req, res) => {
	res.send("hello")
})

app.listen(3000)
