
interface Props {
    heading: string;
}

const Toast = ({heading}:Props ) => {
  return (
    <>
    <style>
        {`
          @keyframes slideIn {
            0% {
              bottom: -50px; /* Start position */
              opacity: 0;    /* Start invisible */
            }
            5% {
              bottom: 16px;  /* End position */
              opacity: 1;    /* End fully visible */
            }
            95% {
              bottom: 16px;  /* End position */
              opacity: 1;    /* End fully visible */
            }
            100% {
              bottom: -50px;  /* End position */
              opacity: 0;
            }
          }

          .Toast {
            animation: slideIn 10s forwards; /* Animation */
            z-index: 1000; /* Ensure it's above other content */
          }

          .Toasthidden {
            display: none; /* Hide when not visible */
          }
        `}
      </style>
    <div className='Toast block absolute text-center h-500px bg-[#bbf7d0] text-green-950 bottom-16 left-16 py-3 px-8 rounded'>
        <h3 className="font-medium">{heading}</h3>
    </div>
    </>
  )
}

export default Toast