import { motion, useDragControls } from "framer-motion";


const UseDragControl = () => {
  const controls = useDragControls()
  return (
<div className='border mb-14 border-red-500 flex flex-col justify-center items-center '>
 
 <motion.div onPointerDown={(e)=> controls.start(e)}
 
 className='w-full h-4 bg-indigo-500  flex flex-wrap gap-5'>

 </motion.div>
 <motion.div className='size-64 bg-green-600  rounded-lg flex flex-wrap gap-5'
 drag="x" dragControls={controls}
 >

 </motion.div>
  </div>
  );
};

export default UseDragControl;