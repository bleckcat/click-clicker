import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks((oldClicks) => oldClicks + 1)
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 h-screen max-h-screen pb-8">
        <div className="col-span-4 flex flex-col justify-center items-center">
          <h1>
            counter: <span>{clicks}</span>
          </h1>
          <img
            src="/cursor.png"
            alt="cursor"
            className="max-w-56 active:scale-95"
            onClick={() => {
              handleClick()
            }}
          />
        </div>
        <div className="col-span-4 bg-win-blue-grad p-1 m-2 rounded flex flex-col">
          <h2>Tabs</h2>
          <div className="grow bg-win-semi-white flex flex-col">
            <div>Search</div>
            <div className="grow bg-white">Content</div>
          </div>
        </div>
        <div className="col-span-4">upgrades</div>
      </div>
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-win-blue to-win-blue-grad flex items-center z-10">
        <button
          type="button"
          className="self-stretch px-4 bg-gradient-to-r from-win-green-grad to-win-green"
        >
          Start
        </button>
      </div>
    </>
  )
}

export default App
