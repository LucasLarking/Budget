import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
const MonthlyBudget = () => {
  const [show_text, set_show_text] = useState(true);
  const count = useMotionValue(20)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, 56, {
      duration: 1,  // Set the duration to 5 seconds (increase or decrease as needed)
      ease: "easeInOut",  // You can change this to any easing function you prefer
    });

    return () => controls.stop()
  }, [])
  return (
    <>
      <div className="border border-[#09B96D] p-4 w-[100%] h-[100%] rounded">
        <div className="top">
          <h3 className="font-semibold text-lg">Månadsbudget</h3>
        </div>
        <div className="bottom mt-3">
          <div className="flex justify-between">
            <div className="">
              <span className="text-[#09B96D] text-base font-bold">12 000 Kr</span>
              <span className="text-slate-400 text-xs  font-semibold ml-2"> av 29 000 Kr</span>
            </div>
            <div className="right">
              <span>Kvar </span>
              <span className="font-bold text-base">29 000 Kr</span>
            </div>
          </div>
          <div className="progress_bar border-2 border-[#09B96D] flex rounded mt-1">
            <motion.div
              className="completed w-1/2 bg-[#09B96D] p-1 h-10"
              initial={{ width: '0%' }}  // Start at 0% width
              animate={{ width: '60%' }}  // Animate to 60% width
              transition={{
                type: 'spring',  // Use spring for bouncy effect
                stiffness: 30,  // Control the spring's stiffness (higher = less bouncy)
                damping: 6,     // Control how bouncy the animation is (lower = more bouncy)
                duration: 1,     // You can also control the overall duration
                overshootClamping: true,
          
              }}
              onAnimationComplete={() => set_show_text(true)}
            >

              <div className="mr-4 text-right">

                <motion.div
                  className=" text-white"
                  initial={{ opacity: 1, x: -15 }}  // Start with opacity 0 and shifted down
                  animate={{ opacity: 1, x: 0 }}  // Animate to fully visible and original position
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    duration: 2,  // Animation duration
                    delay: 0,   // Small delay for smooth transition
                  }}
                >
                  {/* {rounded} */}
                  56%
                </motion.div>
                
              </div>
              {/* // <span className="text-white text-base font-semibold tracking-wide">
                //   51% Spenderat
                // </span>
              */}
            </motion.div>
            {/* <div className="completed w-1/2 bg-[#09B96D] p-1">
            </div> */}

          </div>
        </div>
      </div>


    </>
  );
};

export default MonthlyBudget;
