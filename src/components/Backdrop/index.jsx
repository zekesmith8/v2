import { motion } from "framer-motion";

const Backdrop = ({children, onClick}) => {
    return (
        <motion.div 
        className = "backdrop"
        onClick={onClick}>
            

        </motion.div>
    );

};

export default Backdrop