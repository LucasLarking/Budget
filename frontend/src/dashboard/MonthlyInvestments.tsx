import React from "react";

const MonthlyInvestments = () => {
  return (
    <>
      <div className="w-1/2 m-10 bg-[#07060D] pt-10 px-3 pb-2 rounded row-span-3 flex flex-col justify-between">
        <div>
          <h3 className="text-white">Månadens Investeringar</h3>
          <span className="text-white text-4xl font-bold">27 600 Kr</span>
        </div>

        <div className="pt-10 flex flex-col h-4/5">
          <button className="bg-green-300 block p-2 text-sm text-white, font-bold rounded">
            ↗ Lägg Till Investering
          </button>
          <div className="relative flex-1  mt-2 rounded bg-white">
         
        
            <div className="bg-[#f4f4f5] m-1.5 px-3 py-2 rounded-lg">
              <div className="flex justify-between w-full">
                <span className="mb-1 text-black text-sm block font-bold">
                  Google
                </span>
                <span className=" text-black text-sm">
                  5000 Kr
                </span>
              </div>
            </div>
            <div className="bg-[#f4f4f5] m-1.5 px-3 py-2 rounded-lg">
              <div className="flex justify-between w-full">
                <span className="mb-1 text-black text-sm block font-bold">
                  Google
                </span>
                <span className=" text-black text-sm">
                  5000 Kr
                </span>
              </div>
            </div>
            <div className="bg-[#f4f4f5] m-1.5 px-3 py-2 rounded-lg">
              <div className="flex justify-between w-full">
                <span className="mb-1 text-black text-sm block font-bold">
                  Google
                </span>
                <span className=" text-black text-sm">
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
