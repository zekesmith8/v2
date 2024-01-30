import {motion} from "framer-motion";
import Backdrop from "../Backdrop";

const Modal = ({ handleClose, text }) => {
    <Backdrop onClick={handleClose}
        
    >
        <motion.div
            onClick={(e) => e.stopPropagation()}
        >

        </motion.div>

    </Backdrop>

};

export default Modal