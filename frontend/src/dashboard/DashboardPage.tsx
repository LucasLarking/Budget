// import { Button } from "flowbite-react";
// import Chart from "./Chart";
// import MonthlyCashFlow from "./MonthlyCashFlow";
import StackedBarChart from "@/charts/StackedBarChart";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-darkPageBg bg-[#1A1D21] h-screen">
        <div className="container mx-auto bg-darkPageBg">
          <div className="graphs_container grid grid-rows-3 grid-cols-4 gap-3 pt-20">
            <div className="bg-white rounded-lg p-6 py-10 bg-[#D7FF00] bg-gradient-to-r from-[#D7FF00] to-[#CCE833]">
              <span className="opacity-50">Lön Kvar</span>
              <div className="flex gap-5 items-center">
                <span className="text-4xl font-bold">12 396 Kr</span>
                <span className="h-8 px-2 flex items-center justify-center bg-[#C1E30E] rounded-lg text-xs opacity-70">
                  +12%
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 py-10 bg-[#D7FF00] bg-gradient-to-r from-[#D7FF00] to-[#CCE833]">
              <span className="opacity-50">Spenderat</span>
              <div className="flex gap-5 items-center">
                <span className="text-4xl font-bold">5 724 Kr</span>
                <span className="h-8 px-2 flex items-center justify-center bg-[#C1E30E] rounded-lg text-xs opacity-70">
                  -3%
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 py-10 bg-[#D7FF00] bg-gradient-to-r from-[#D7FF00] to-[#CCE833]">
              <span className="opacity-50">Totalt Sparat</span>
              <div className="flex gap-5 items-center">
                <span className="text-4xl font-bold">35 000 Kr</span>
              </div>
            </div>
            <div className="bg-white pt-10 px-3 pb-2 rounded-lg row-span-3 flex flex-col justify-between">
              <div>
                <h3 className="">Månadens Investeringar</h3>
                <span className="text-4xl font-bold">27 600 Kr</span>
              </div>

              <div className="pt-10 flex flex-col h-4/5">
                <button className="bg-[#D7FF00] w-full block p-2 text-sm text-black font-bold rounded-lg">
                  {" "}
                  ↗ Lägg Till Investering
                </button>
                <div className="relative flex-1  mt-2 rounded-lg bg-[#191919]">
                  <div className="flex items-center bg-[#303030]  m-1.5 p-2 rounded-lg">
                    <div className="px-3">23%</div>
                    <div className="">
                      <span className="-mb-1 text-white text-xs block">
                        Home Renovation
                      </span>
                      <span className=" text-white opacity-30 text-xs">
                        2300 / 1000
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center bg-[#303030] m-1.5 p-2 rounded-lg">
                    <div className="px-3">23%</div>
                    <div className="">
                      <span className="-mb-1 text-white text-xs block">
                        Home Renovation
                      </span>
                      <span className=" text-white opacity-30 text-xs">
                        2300 / 1000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#333333] bg-opacity-20 p-4 col-span-3 row-span-2 ">
              
              {/* <Chart /> */}
              {/* <div className="w-1/2 h-full"> */}
              <StackedBarChart />

              {/* </div> */}
              
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-1  gap-3 mt-3">
            <div className="col-span-1 bg-[#333333] bg-opacity-20 p-6 py-10">
              <h3 className="text-4xl text-white pb-5">Utgiftskollen</h3>

              <div className="flex flex-col gap-3">
                <div className="flex w-full gap-2">
                  <div className="flex justify-between items-center  w-3/4 bg-white rounded px-3  p-2 bg-gradient-to-r from-[#D7FF00] to-[#CCE833]">
                    <span className=" text-sm font-semibold">Food 179 Kr</span>
                    <span className="bg-[#303030] p-1 text-xs rounded text-white">
                      47%
                    </span>
                  </div>
                  <div className="rounded w-1/4 bg-gradient-to-r from-[#303030] to-transparent   "></div>
                </div>
                <div className="flex w-full gap-2">
                  <div className="flex justify-between items-center  w-3/4 bg-white rounded px-3  p-2 bg-gradient-to-r from-[#D7FF00] to-[#CCE833]">
                    <span className=" text-sm font-semibold">Food 179 Kr</span>
                    <span className="bg-[#303030] p-1 text-xs rounded text-white">
                      47%
                    </span>
                  </div>
                  <div className="rounded w-1/4 bg-gradient-to-r from-[#303030] to-transparent   "></div>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-[#333333] bg-opacity-20 p-6 py-10">
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
// col-span-2
// row-span-2
