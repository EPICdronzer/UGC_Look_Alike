import React from 'react'
import {NavLink} from 'react-router-dom'
function StudentPortalContent() {
  return (
    <> 
        <div className='pb-2 text-xl'>
                    About UGC
                </div>
                <div className='border-b-4 mb-4 w-14 border-amber-600 '></div>
                <div className='w-xs gap-2.5 flex flex-col'>
                    
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/Genesis" className="!text-inherit !no-underline">Fake Universities</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/supreme" className="!text-inherit !no-underline">Supreme Court Judgments</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/eduabroad" className="!text-inherit !no-underline">Edu Abroad for Indian Students</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/educational" className="!text-inherit !no-underline">Educational Loan</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/helpline" className="!text-inherit !no-underline">Helplines</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/sensitization" className="!text-inherit !no-underline">Gender Sensitization Data in Universities, Colleges & Institutions in India</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/gender" className="!text-inherit !no-underline">Gender Champions in Institutions</NavLink></span></div>
                    
        </div>
    </>
  )
}

export default StudentPortalContent