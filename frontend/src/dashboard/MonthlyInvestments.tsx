import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const MonthlyInvestments = () => {
  const count = useMotionValue(10000)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, 27600, {
      duration: 1,  // Set the duration to 5 seconds (increase or decrease as needed)
      ease: "easeInOut",  // You can change this to any easing function you prefer
    });

    return () => controls.stop()
  }, [])

  return (
    <>
      <div className="w-full h-full border-4  border-[#09B96D] pt-10 lg:px-3 pb-2 rounded row-span-3 flex flex-col justify-between">
        <div className=" px-3 lg:px-0">
          <h3 className="text-black">Månadens Investeringar</h3>
          <motion.div className="text-[#09B96D] text-4xl font-bold w-28 inline-block">
            {rounded}
          </motion.div>
          <span className="text-[#09B96D] text-4xl font-bold">Kr</span>
        </div>

        <div className=" flex flex-col h-[370px]  ">
          <button className="bg-[#09B96D] block p-2 text-sm text-white font-bold rounded mx-3 lg:mx-0">
            Lägg Till Investering
          </button>
          <div className="relative flex-1  mt-2 rounded bg-green-300">


            <div className="bg-[#09B96D] m-3 lg:m-1.5 px-3 py-2 rounded">
              <div className="flex justify-between w-full ">
                <span className="mb-1 text-white text-sm block font-bold ">
                  Google
                </span>
                <span className=" text-white text-sm">
                  5000 Kr
                </span>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyInvestments;
