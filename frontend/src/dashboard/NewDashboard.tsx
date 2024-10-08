import MonthlyBudget from "./MonthlyBudget"

const NewDashboard = () => {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 m-12">
                <div className="relative h-40  col-span-2"> <MonthlyBudget /></div>
                <div className="bg-gray-300  h-40">Item 2</div>
                <div className="bg-gray-300  h-40 row-span-2">Item 3</div>
                <div className="bg-gray-300  h-40 col-span-3">Item 4</div>
                <div className="bg-gray-300  h-40 ">Item 5</div>
                <div className="bg-gray-300  h-40 col-span-3">Item 6</div>
            </div>
        </>
    )
}

export default NewDashboard