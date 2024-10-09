import React from "react";

const MonthlyInvestments = () => {
  return (
    <>
      <div className="w-full h-full border-4  border-[#09B96D] pt-10 lg:px-3 pb-2 rounded row-span-3 flex flex-col justify-between">
        <div className="px-3 lg:px-0">
          <h3 className="text-black">Månadens Investeringar</h3>
          <span className="text-[#09B96D] text-4xl font-bold">27 600 Kr</span>
        </div>

        <div className="pt-10 flex flex-col h-4/5">
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
