import { useAppContext } from "@/app/context/AppContext"

export default function Count() {
  const { count, setCount } = useAppContext()

  return (
    <div style={{ padding: 20 }}>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}