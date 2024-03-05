import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hooks = () => {
    const controls = useAnimationControls()
    const [toggle,setToggle] = useState(false)
    // const handleForward = ()=>{
    //     setToggle(!toggle)
    //    if(toggle){
    //     controls.start({x:260})
    //        }else {
    //         controls.start({x:0})
    //        }
    // }
 useEffect(()=>{

 },[])
  return (
    <div className='border border-red-500 size[500px] flex flex-col justify-center items-center overflow-hidden'>
      <div className='flex justify-center items-center gap-2 mt-4'>
      <button  onClick={()=>handleForward()} className='px-3 py-2 rounded bg-green-500 mb-10'>Forward </button>
        
      </div>
   <motion.div duration animate={controls} className='size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5'></motion.div>
    </div>
  );
};

export default Hooks;