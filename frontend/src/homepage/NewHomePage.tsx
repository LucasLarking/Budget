import React from 'react'
import AuroraBackgroundComponent from './AuroraBackgroundComponent'
import LoginPage from '@/login/LoginPage'

const NewHomePage = () => {
  return (
    <>
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 -z-1000'>
        <AuroraBackgroundComponent />
      </div>
      <div className=' w-full h-[100vh] relative overflow-hidden pt-[15%] border-2 z-100'>
        <div className='z-200'>
          <LoginPage />
        </div>
        <div className="header absolute bottom-[10%] right-0 flex justify-end">
          <h1 className='text-end columns'>
            <span className=' text-[3vw]'>En Ny Era</span>
            <span className='-mt-10 text-[7vw] block '>Av Budgetering</span>
          </h1>
        </div>
      </div> */}

      {/* <div className=' flex p-20 justify-between'>
        <div className='illustrationContainer bg-green-400  w-[800px] h-[600px] flex align-items-end   relative'>

          <div className='bottomLeft absolute bg-white w-16 h-1/2 bottom-0'></div>
          <div className='bg-[#bb2548] w-[700px] overflow-hidden'>
            <video autoPlay loop width="800px" className='bg-blue-500 border'>
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
        <div className='bg-blue-300 block'>right</div>
      </div > */}


      {/* <div className="relative container border mx-16 w-[600px] h-[400px]">

        <div className="top border w-40 h-[100px] absolute right-[40px] top-[100px]">top
          <span className='span1'></span>
        </div>
        <div className="bottom border w-[400px] h-[300px]">bottom </div>
      </div>

      <div>test

      </div> */}


      <div className='w-[900px] bg-[#bb2548] relative'>
        <div className="container relative">

          <div className="svg-overlay overflow-hidden">
            <svg width="890" height="612" viewBox="0 0 890 612" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H890V654.5H0V0ZM575 509.5H218.5C204.693 509.5 193.5 498.307 193.5 484.5V319C193.5 305.193 182.307 294 168.5 294H137C123.193 294 112 282.807 112 269V120.5C112 106.693 123.193 95.5 137 95.5H429.5C441.374 95.5 451 105.126 451 117C451 128.874 460.626 138.5 472.5 138.5H483C496.807 138.5 508 149.693 508 163.5V164.5C508 178.307 519.193 189.5 533 189.5H807.5C821.307 189.5 832.5 200.693 832.5 214.5V354C832.5 367.807 821.307 379 807.5 379H625C611.193 379 600 390.193 600 404V484.5C600 498.307 588.807 509.5 575 509.5Z" fill="white" />
            </svg>

          </div>
          <div className="hello">
            <video controls autoPlay loop width="800px" className='videoContainer'>
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div >
      </div>
    </>
  )
}

export default NewHomePage