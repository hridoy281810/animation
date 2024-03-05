import { useScroll,motion } from "framer-motion";


const UseScrool = () => {
    const {scrollYProgress} = useScroll()

  return (
    <motion.div className="h-12 w-full fixed top-0 bg-green-900"
    style={{scaleX: scrollYProgress}}
    >
  
    </motion.div>
  );
};

export default UseScrool;