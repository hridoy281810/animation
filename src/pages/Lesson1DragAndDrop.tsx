import { motion } from "framer-motion";

const parent = {
hidden :{opacity: 0,scale:0.9},
visible: { opacity: 1,scale: 1, 
    transition:{ease: "easeInOut",duration: 4,delayChildren: 0.5, staggerChildren: 0.5 },
    
  },
  hover: {
    scale: 1.1,
    transition:{duration: 0.5}
},
tab:{scale:1}
}
const child = {
    hidden :{opacity: 0,scale:0.9},
visible: { opacity: 1,scale: 1}
}
const Lesson1DragAndDrop = () => {
  return (
    <div>
<motion.div
variants={parent}
initial="hidden"
animate="visible"
whileHover='hover'
whileTap='tab'
onHoverStart={()=> console.log('hover start')}
onHoverEnd={()=>console.log('hover end')}
drag={}
className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center">
    <motion.div variants={child}  className="size-20 bg-cyan-400 rounded-sm"></motion.div>
    <motion.div variants={child}  className="size-20 bg-cyan-400 rounded-sm"></motion.div>
    <motion.div variants={child}  className="size-20 bg-cyan-400 rounded-sm"></motion.div>
    <motion.div variants={child}  className="size-20 bg-cyan-400 rounded-sm"></motion.div>
</motion.div>
    </div>
  );
};

export default Lesson1DragAndDrop;


// //transition={{duration: 4 , repeat:Infinity, repeatType: "reverse",ease:'linear'}}