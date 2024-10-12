import React from 'react'
import HomePageChart from './HomePageChart'
import HomePageLineChart from './HomePageLineChart'


const BlockHomePage = () => {
    return (
        <>
            <div className=''>
                <div className='fix'></div>
                <div className='bg-[#161a19] p-4 grid grid-rows-3 h-[100vh] gap-[16px] '>
                    <div className="hero flex overflow-hidden w-full row-span-2  bg-[#B3F5BC] rounded-[40px] relative ">
                        <div className="logInContainer">
                            <span className='logInSpan1'></span>
                            <span className='logInSpan2'></span>
                            <a href="/login">Logga In</a>
                        </div>
                        <HomePageChart />
                        <div className="left">
                            <a href="" className='text-2xl font-medium absolute left-20 top-5'>Larking Budget</a>
                            {/* <img src="man.jpg" alt="" className='w-[500px]' /> */}
                        </div>
                        <div className="rigth flex-col flex justify-center">
                            <h1 className='text-8xl font-medium'><span>Bygg Din</span> <span className='block'>Drömbudget</span></h1>
                            <a className='bg-[#098638] text-xl text-white font-medium  rounded-[40px] w-[270px] h-16 flex items-center justify-center text-center mt-16' href="/login">Registrera Dig Idag</a>
                        </div>
                    </div>
                    <div className='relavite block-container flex '>
                        <div className="block1 relative flex flex-col justify-between">
                            <div className='flex justify-between  m-8'>

                                <span className='font-medium'>[ RATING ]</span>
                                <h2 className='text-8xl -mt-5'>4.9</h2>
                            </div>

                            <div className='ratingBottom text-right text-lg'>
                                Den bästa budgetappen.
                            </div>
                        </div>
                        <div className="block2">

                            <h2 className='text-4xl font-semibold text-black pb-4 w-[500px] p-8'>Maximera Dina Sparmål - Helt Gratis</h2>
                        </div>
                        <div className='block3 p-8'>
                            <h2 className='text-8xl text-white pb-4'>+22%</h2>
                            <HomePageLineChart />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlockHomePage