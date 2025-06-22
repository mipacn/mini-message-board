import { Router } from "express"

export default function createMessageRouter(messages) {
	const messageRouter = Router()
	messageRouter.get("/:id", (req, res) => {
		const id = parseInt(req.params.id, 10)
		const message = messages[id]
		if (message) res.render("message", { message: message })
		else res.send("message not found")
	})
	return messageRouter
}
