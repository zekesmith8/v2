import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <h1 className="header">ByEzekiel</h1>
      <p>
        Software Developer
      </p>
      <div className="card">
        <motion.button 
        onClick={() => setCount((count) => count + 1)}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className = "save-button"
        >
          Oh my god a button - look at it go~! {count}
        </motion.button>
      </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Hero