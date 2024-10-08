import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>

      <div className="flex justify-around">
        <Link className='text-blue-600 bg-[#f4f4f5] text-xl' to={"/newdashboard"}>newdashboard</Link>
        <Link className='text-blue-600 bg-[#f4f4f5] text-xl' to={"/dashboard"}>dashboard</Link>
        <Link className='text-blue-600 text-xl' to={"/login"}>login</Link>
        <Link className='text-blue-600 text-xl' to={"/expensesovertime"}>expensesovertime</Link>
        <Link className='text-blue-600 text-xl' to={"/chad"}>chad</Link>
        <Link className='text-blue-600 text-xl' to={"/monthlybudget"}>monthlybudget</Link>
        <Link className='text-blue-600 text-xl' to={"/totalsaved"}>totalsaved</Link>
        <Link className='text-blue-600 text-xl' to={"/monthlyinvestments"}>monthlyinvestments</Link>
        <Link className='text-blue-600 text-xl' to={"/expensecategories"}>expensecategories</Link>
        <Link className='text-blue-600 text-xl' to={"/transactions"}>transactions</Link>

      </div>
    </>
  )
}

export default HomePage


// {index: true, element: <HomePage />},
// {path: "/dashboard", element: <DashboardPage />},
// {path: "/login", element: <LoginPage />},
// {path: "/test", element: <TestComponent />},
// {path: "/chad", element: <ChadDashboard />},
// {path: "/monthlybudget", element: <MonthlyBudget />},
// {path: "/totalsaved", element: <TotalSaved />},
// {path: "/monthlyinvestments", element: <MonthlyInvestments />},
// {path: "/expensecategories", element: <ExpenseCategories />},