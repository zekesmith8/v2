import { useState } from 'react'
import './App.css'
import './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <></>
      <h1 className="header">ByEzekiel</h1>
      <p>
        Software Developer
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Oh my god a button - look at it go~! {count}
        </button>
      </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default App
