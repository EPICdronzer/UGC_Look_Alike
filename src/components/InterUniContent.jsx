import React from 'react'
import { NavLink } from 'react-router-dom'

function InterUniContent() {
    
  return (
    <>
        <div className='pb-2 text-xl'>
                    INTER UNIVERSITY CENTRES
                </div>
                <div className='border-b-4 mb-4 w-14 border-amber-600 '></div>
                <div className='w-xs gap-2.5 flex flex-col'>
                    
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/1" className="!text-inherit !no-underline">IUCA</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/2" className="!text-inherit !no-underline">IUCAA</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/3" className="!text-inherit !no-underline">UGC DAE CSR</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/4" className="!text-inherit !no-underline">CEC</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/5" className="!text-inherit !no-underline">INFLIBNET</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/6" className="!text-inherit !no-underline">NAAC</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/7" className="!text-inherit !no-underline">IUCTE</NavLink></span></div>
                        <div class="flex gap-2 items-center"><i class="fa fa-arrow-circle-right text-amber-600"/><span><NavLink to="/InterUniversityCentres/display/8" className="!text-inherit !no-underline">IUC-YS</NavLink></span></div>
                    
        </div>
    </>
 
  )
}

export default InterUniContent