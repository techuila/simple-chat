import { ChatBox } from './ChatBox'
import { ChatFooter } from './ChatFooter'

export function ChatView() {
  return (
    <div className="rounded-lg border-solid border-gray-100 border-2 h-full shadow-sm flex flex-col">
      <ChatBox />
      <ChatFooter />
    </div>
  )
}
