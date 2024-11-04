import { useState } from 'react'

function App() {

  const [color, setColor] = useState("skyblue")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap jastify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full  text-white" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>red</button>
          <button className="outline-none px-4 py-1 rounded-full  text-white" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>black</button>
          <button className="outline-none px-4 py-1 rounded-full  text-white" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>green</button>
          <button className="outline-none px-4 py-1 rounded-full  text-white" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>purple</button>
          <button className="outline-none px-4 py-1 rounded-full  text-white" style={{ backgroundColor: "skyblue" }} onClick={() => setColor("skyblue")}>skyblue</button>
          <button className="outline-none px-4 py-1 rounded-full  text-white" style={{ backgroundColor: "Orange" }} onClick={() => setColor("orange")}>orange</button>
        </div>
      </div>
    </div>
  )
}

export default App 
