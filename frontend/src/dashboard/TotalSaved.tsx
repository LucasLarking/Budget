import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const TotalSaved = () => {
  const count = useMotionValue(20)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, 35000, {
      duration: 1,  // Set the duration to 5 seconds (increase or decrease as needed)
      ease: "easeInOut",  // You can change this to any easing function you prefer
    });

    return () => controls.stop()
  }, [])
  return (
    <>
      <div className="w-full h-full p-6 py-10  bg-[#09B96D] rounded">
        <h3 className="font-semibold text-lg opacity-50 text-white">Totalt Sparat</h3>
        <div className="flex  items-center relative">
          <motion.div className="text-4xl font-bold text-white w-28 ">
            {rounded}
          </motion.div>
          <span className="text-4xl font-bold text-white">Kr</span>
        </div>


      </div>

    </>
  );
};

export default TotalSaved;
