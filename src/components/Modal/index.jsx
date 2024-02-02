import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

const Modal = ({ handleClose, text }) => {

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            drag
            onClick={(e) => e.stopPropagation()}  
            className="modal blue-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eaque distinctio, enim in error nesciunt repudiandae veritatis harum blanditiis ipsum debitis voluptatibus numquam eius consequatur rerum. Eos voluptatum iusto ratione?</p>
            <button onClick={handleClose}>WRONG LEVER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</button>
          </motion.div>
      </Backdrop>
    );
  };

  
  export default Modal;