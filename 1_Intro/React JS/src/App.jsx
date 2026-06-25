import { useState } from "react";

export default function App(){
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count+1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}> 
        {/* Instead of changing everytime the DOM Element React will Render exactly that particular */}
        Increment
      </button>
    </>
  )
}
