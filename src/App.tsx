import { useState } from "react"
import { AnimationTest } from "./component/test"

function App() {
  let [count,setCount] = useState(0)
  return (
    <>
      <div>
        <AnimationTest/>
      </div>
    </>
  )
}

export default App
