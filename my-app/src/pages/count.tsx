import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 20 }}>
      <h1 >count: {count}</h1>
      <button color="primary" onClick={() => setCount(count + 1)}>Increment</button>
      <button color="primary" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}