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
            <p>{text}</p>
            <button onClick={handleClose}>WRONG LEVER !!!!!!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sed autem vel veniam</button>
          </motion.div>
      </Backdrop>
    );
  };

  
  export default Modal;