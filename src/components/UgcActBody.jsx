import React from 'react'
import AboutUgcContent from './AboutUgcContent'

function UgcActBody() {
  return (
    <>
       <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
                Home/
            </div>
            <div className="text-5xl mb-2">
                UGC Act 1956
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
        <div className='flex justify-center gap-7 px-32 py-20'>
            <div className='flex flex-col ga-5'>
                <div className='text-4xl mb-3 text-amber-600'>
                    UGC Act 1956
                </div>
                <div class="flex gap-6 items-start">
                    <div className='flex flex-wrap gap-4'>
                        <div className='font-bold'>
                            The University Grants Commission Act And Rules & Regulations Under The Act, 1956
                        </div>
                        <div>
                            This publication has been printed under the direction and control of UGC and the Govt. of India shall not be deemed responsible for the material reproduced in this copy of the UGC Act, 1956 and Rules and Regulations under the Act, which is strictly meant for official use and shall not be used for commercial purpose.
                        </div>
                        <div className='flex flex-wrap font-bold gap-1 items-center'>
                            <i class="fa fa-file-pdf"/>View UGC Act 1956 Details - (Hindi Version)
                        </div>
                    </div>
                    <img className='w-xl h-xl' src="https://www.ugc.gov.in/Content/images/MainPage/ugc_act.gif"/>
                </div>
            </div>

            <div className='border-t-8 border-amber-600 p-6'>
                <AboutUgcContent/>
            </div>
        </div> 
    </>
  )
}

export default UgcActBody