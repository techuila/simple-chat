import { App } from './infra/http/app'
import { ChatController } from './infra/http/controllers/chat.controller'

const port = Number(process.env.PORT) || 3000

// Initialize controllers
const chatController = new ChatController()

const controllers = [chatController]

// Initialize app server
const app = new App(controllers, port)

// Start server
app.listen()
