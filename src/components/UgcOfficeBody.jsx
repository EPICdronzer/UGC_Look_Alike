import React from 'react'
import AboutUgcContent from './AboutUgcContent'

function UgcOfficeBody() {
  return (
    <>
        <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / UGC_Offices
            </div>
            <div className="text-5xl mb-2">
            UGC Offices
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
        
        <div className='flex justify-center gap-60 px-32 py-20 flex-wrap'>
                
            <div className='flex flex-col flex-wrap'>
                <div className='text-4xl mb-3 text-amber-600'>
                    UGC Offices
                </div>  
                <div className='w-auto h-auto flex flex-wrap flex-col gap-3'>
                    <div className="border-2 w-auto h-auto border-gray-300 flex flex-col pb-16">
                  
                      <div className="w-full font-bold bg-gray-200 py-2 px-2">
                        University Grants Commission (UGC) - Head Office
                      </div>

                      <div className="flex-1 py-3 pl-3 flex flex-col gap-3">

                        <div className="flex gap-2 items-start">
                          <i className="fa-solid fa-location-dot text-amber-600 text-sm"></i>
                          <div className="leading-tight">
                            University Grants Commission (UGC)<br />
                            Bahadur Shah Zafar Marg,<br />
                            New Delhi - 110002.
                          </div>
                        </div>

                        <div className="flex gap-2 items-center">
                          <i className="fa-solid fa-phone text-amber-600 text-sm"></i>
                          <div>011-23604127, 011-23604200</div>
                        </div>

                      </div>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className="border-2 flex-1  h-auto border-gray-300 flex flex-col">
                  
                      <div className="w-full font-bold bg-gray-200 py-2 pl-2">
                        University Grants Commission (UGC) 
                      </div>

                      <div className="flex-1 py-3 pl-3 flex flex-col gap-3">

                        <div className="flex gap-2 items-start">
                          <i className="fa-solid fa-location-dot text-amber-600 text-sm"></i>
                          <div className="leading-tight">
                            University Grants Commission<br/>
                            35- Ferozeshah Road<br/>
                            New Delhi - 110001
                          </div>
                        </div>

                        <div className="flex gap-2 items-center">
                          <i className="fa-solid fa-phone text-amber-600 text-sm"></i>
                          <div>011-23604650</div>
                        </div>

                      </div>
                        </div>
                        <div className="border-2 flex-1 h-auto border-gray-300 flex flex-col">
                      
                          <div className="w-full font-bold bg-gray-200 py-2 pl-2">
                            University Grants Commission (UGC)
                          </div>

                          <div className="flex-1 py-3 pl-3 flex flex-col gap-3">

                            <div className="flex gap-2 items-start">
                              <i className="fa-solid fa-location-dot text-amber-600 text-sm"></i>
                              <div className="leading-tight">
                                  University Grants Commission (UGC)<br/>
                                  NET Bureau,<br/>
                                  South Campus of Delhi University,<br/>
                                  Benito Jhuarez Marg,<br/>
                                  New Delhi - 110021,<br/>
                                  Near Dhola Kuan
                              </div>
                            </div>

                            <div className="flex gap-2 items-center">
                              <i className="fa-solid fa-phone text-amber-600 text-sm"></i>
                              <div>011-24115426, 011-24112276</div>
                            </div>

                          </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='border-t-8 border-amber-600 p-6'>
                <AboutUgcContent/>
            </div>
        </div>
    </>
  )
}

export default UgcOfficeBody