import { motion } from "framer-motion";

const parent = {
hidden :{opacity: 0,scale:0.9},
visible: { opacity: 0.5,scale: 1, 
    transition:{ease: "easeInOut",duration: 4,delayChildren: 0.5, staggerChildren: 0.5 },
    
  },
  hover: {
  opacity: 1,
},
tab:{scale:1}
}

const Lesson1 = () => {
  return (
    <div>
<motion.div
variants={parent}
initial="hidden"
animate="visible"
whileHover='hover'
whileTap='tab'
drag
dragConstraints={{left: -200, right: 200,top: -100,bottom:1 -200}}

className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center">

</motion.div>
    </div>
  );
};

export default Lesson1;


// //transition={{duration: 4 , repeat:Infinity, repeatType: "reverse",ease:'linear'}}