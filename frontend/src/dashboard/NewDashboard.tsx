import ExpenseCategories from "./ExpenseCategories"
import Expenses_over_time from "./Expenses_over_time"
import MonthlyBudget from "./MonthlyBudget"
import MonthlyInvestments from "./MonthlyInvestments"
import TotalSaved from "./TotalSaved"
import TransactionsTableComponent from "./TransactionsTableComponent"

const NewDashboard = () => {
    return (
        <>
            <article className="lg:m-12 m-2 ">

                <div className="m-auto max-w-[1700px] grid lg:grid-cols-4 lg:grid-rows-5 gap-4  grid-cols-1 grid-rows-8">
                    <div className="relative h-80 lg:h-[180px] lg:col-span-2 col-span-1"> <MonthlyBudget /></div>
                    <div className="lg:h-[180px] bg-gray-300 h-80"> <TotalSaved /></div>
                    <div className=" lg:row-span-3 row-span-3 "> <MonthlyInvestments /></div>
                    <div className="h-80  relative lg:h-full bg-red-400  lg:row-span-2 lg:col-span-3 col-span-1"> <Expenses_over_time /> </div>
                    <div className="h-80 lg:h-auto  lg:row-span-2 lg:col-span-2"> <ExpenseCategories /> </div>
                    <div className="h-80  lg:h-auto lg:row-span-2 lg:col-span-2 col-span-1 "> <TransactionsTableComponent /> </div>
                </div>


            </article>
        </>
    )
}

export default NewDashboard