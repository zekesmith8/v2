import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react'
import Modal from "./Modal/index.jsx"




function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen (false);
  const open = () => setModalOpen (true);
 

  return (
    <>
    <section>
      <h1 className="header">ByEzekiel</h1>
      <p>
        Software Developer
      </p>
      <div className="card">
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className = "save-button"
        onClick={() => (modalOpen ? close() : open())}
        >
          Pull the lever Kronk 
        </motion.button>

        <AnimatePresence
        initial={false}
        onExitComplete={() => null}
        >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>

        

      </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Hero