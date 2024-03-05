import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const UseAnimate = () => {
    const [scope,animate] = useAnimate()
useEffect(()=>{
    animate( [
        [scope.current, {rotate: 45}],
        [scope.current,  {opacity:0}],
        [scope.current,   {rotate:45}],
        [scope.current,    {opacity:1}],
        [scope.current,      {rotate:90}],
        [scope.current,     {opacity:0}],
        [scope.current,           {rotate:135}],
        [scope.current,    {opacity:1}],
        [scope.current,           {rotate:180}],
        [scope.current,    {opacity:0}],
        [scope.current,           {rotate:225}],
        [scope.current,    {opacity:1}],

    ])
},[])
  return (
    <div className='border mb-14 border-red-500 flex flex-col justify-center items-center '>
 
 <div 
 ref={scope}
 className='size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5'>

 </div>
  </div>
  );
};

export default UseAnimate;