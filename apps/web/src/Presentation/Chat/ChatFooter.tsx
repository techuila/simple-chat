export function ChatFooter() {
  return (
    <div className="border-t-2 border-solid border-gray-200 p-4 flex gap-2">
      <input
        className="border-solid border-2 rounded-md border-gray-200 h-12 px-2"
        placeholder="Name"
      />
      <div></div>
      <div className="bg-white border-solid border-2 rounded-md border-gray-200 h-12 px-2 py-2 w-full flex">
        <textarea
          className="resize-none w-full h-full outline-none"
          placeholder="Type your message..."
        />

        <button className="border-none rounded-md bg-cyan-500 px-2 transition-all ease-out delay-100 shadow-sm hover:bg-cyan-400">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
