import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const UseView = () => {
    const ref = useRef<HTMLDivElement>(null)
    console.log(ref);
    
    const inView= useInView(ref,{once:true})
    // const inView= useInView(ref)
    console.log(inView,'jnsdj');
  return (
    <div className='border mb-14 border-red-500 flex flex-col justify-center items-center '>
 
 <motion.div 
 ref={ref}
 animate={inView? {opacity: 1, x: 0,transition: {duration:.8}} : {opacity:0,transition: {duration:.8} ,x:-500}}
 className='size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5'>

 </motion.div>
  </div>
  );
};

export default UseView;