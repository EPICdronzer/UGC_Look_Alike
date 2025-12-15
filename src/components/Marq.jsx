import React from 'react'
import { NavLink } from 'react-router-dom'

function Marq() {
  return (
    <div className='mt-3 mb-4'>
        <marquee direction="left" behaviour="scroll" scrollamount="7" className='text-[#ff6c3a] font-bold text-lg inline-block mb-2'>
            Invitation of applications from eligible colleges for Deemed to be University status, may apply on the portal at https://deemed.ugc.ac.in/
        </marquee>
        
        <div className="bg-gray-100 flex justify-center items-center mt-2 pt-1 pb-1 flex-wrap" >
            <a href="https://www.youtube.com/live/nnWKgPu43vY"><img className="h-35.5" src="https://cbpssubscriber.mygov.in/assets/uploads/X0qP81f7lg3YqNFI?2"/></a>
        </div>

        <div className="flex justify-center items-center w-full mt-5 flex-wrap pl-2">
          
          <div className="flex flex-col justify-items-start items-start gap-4">
            
            <div>
              <h3 className='!font-bold flex-wrap !text-3xl !text-[#3E4C66]'>
              <span className="text-[#ff6c3a]">About </span>
              University Grants Commission
              </h3>
              <p className='flex flex-wrap'>
                The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of
                <br />
                Parliament in 1956, for the coordination, determination and maintenance of standards of teaching, examination and research in university education.
              </p>
            </div>
            <NavLink className="!text-inherit !no-underline" to="/about">
            <button className="bg-[#ff6c3a] text-white w-32 h-12 !rounded-full !text-sm font-semibold items-center justify-center">
              Read More
            </button>
            </NavLink> 
          </div>
        </div>

    </div>
  )
}

export default Marq