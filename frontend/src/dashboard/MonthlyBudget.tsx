import React from "react";

const MonthlyBudget = () => {
  return (
    <>
      <div className="border border-[#09B96D] p-5 w-1/2 m-16 rounded">
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
            <div className="completed w-1/2 bg-[#09B96D] p-1">
              <span className="text-white text-base font-semibold tracking-wide">
                51% Spenderat
              </span>
            </div>

            <span className="border-x-2  w-4 border-[#09B96D]"></span>
            <span className="border-x-2  w-4 border-[#09B96D] ml-4"></span>
            <span className="border-x-2  w-4 border-[#09B96D] ml-4"></span>
            <span className="border-x-2  w-4 border-[#09B96D] ml-4"></span>
            <span className="border-x-2  w-4 border-[#09B96D] ml-4"></span>
            <span className="border-x-2  w-4 border-[#09B96D] ml-4"></span>
            <span className="border-x-2  w-4 border-[#09B96D] ml-4"></span>

          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyBudget;
