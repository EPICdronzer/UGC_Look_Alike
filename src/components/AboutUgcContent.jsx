import React from 'react'
import {NavLink} from 'react-router-dom'
function AboutUgcContent() {
  return (
    <>
        <div className='pb-2 text-xl'>
                    About UGC
                </div>
                <div className='border-b-4 mb-4 w-14 border-amber-600 '></div>
                <div className='w-xs gap-2.5 flex flex-col'>
                    
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/Genesis" className="!text-inherit !no-underline">Genesis</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/Mandate" className="!text-inherit !no-underline">Mandate</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/UGCAct" className="!text-inherit !no-underline">UGC ACT 1956</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/Logo" className="!text-inherit !no-underline">Logo</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/UGCBureaus" className="!text-inherit !no-underline">UGC Bureaus</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/UGCOffices" className="!text-inherit !no-underline">UGC Offices</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres" className="!text-inherit !no-underline">Inter University Centres</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/NationalFacilities" className="!text-inherit !no-underline">National Facilities</NavLink></span></div>
                    
        </div>
    </>
  )
}

export default AboutUgcContent