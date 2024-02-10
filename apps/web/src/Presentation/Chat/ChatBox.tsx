import { Tooltip } from '@/Core/UI/Tooltip'

type UserMessageProps = {
  data: {
    name: string
    messages: {
      text: string
      sentAt: Date
    }[]
  }
  currentUser?: boolean
}

function UserMessage({
  data: { name, messages },
  currentUser,
}: UserMessageProps) {
  const itemPosition = currentUser ? 'items-end' : 'items-start'
  const justifyPosition = currentUser ? 'justify-end' : 'justify-start'
  const textPosition = currentUser ? 'text-right' : 'text-left'

  return (
    <div className={`flex flex-col my-3 ${itemPosition}`}>
      <div className="flex items-center">
        <div className="ml-2">
          <p className={`font-bold text-xs ${textPosition}`}>{name}</p>
          {messages.map(({ text, sentAt }) => (
            <Tooltip
              className={justifyPosition}
              title={
                <p className="text-xs text-gray-500">{sentAt.toDateString()}</p>
              }
              left={currentUser}
            >
              <p className={textPosition}>{text}</p>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ChatBox() {
  return (
    <div className="flex-col flex-1 px-5 overflow-y-auto">
      <div className="py-2">
        {new Array(50).fill(null).map((_, i) => (
          <UserMessage
            key={i}
            data={{
              name: 'John Doe',
              messages: [
                { text: 'Hello world', sentAt: new Date() },
                { text: 'another world', sentAt: new Date() },
              ],
            }}
          />
        ))}{' '}
        <UserMessage
          data={{
            name: 'Axl Rose',
            messages: [
              { text: 'Hello world', sentAt: new Date() },
              { text: 'another world', sentAt: new Date() },
            ],
          }}
          currentUser
        />
      </div>
    </div>
  )
}
