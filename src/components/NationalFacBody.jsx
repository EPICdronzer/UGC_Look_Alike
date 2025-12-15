import React from 'react'
import data from "../JsonData/NationalFacData.json"
import AboutUgcContent from './AboutUgcContent'
function NationalFacBody() {
  return (
    <>
        <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
                Home/ National Facilities
            </div>
            <div className="text-5xl mb-2">
                National Facilities
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
        <div className='flex flex-wrap justify-center gap-5 mt-16'>
            <div className='w-auto h-auto flex flex-wrap flex-col'>
                <div className="text-4xl mb-3 text-amber-600">
                    National Facilities
                </div>
                <div>
                    The UGC has established 4 National Facilities Centre in the selected universities as per details given below:-
                </div>
                <div className='flex flex-wrap max-w-2xl'>
                    {
                        data.map((items)=>{
                            return(
                                <div className='py-10'>
                                    <div className='font-bold'>{items.name}, <span>{items.location}</span></div>
                                    <div class="flex flex-wrap mb-5 text-justify">{items.description}</div>
                                    <div className='flex flex-wrap justify-between '>
                                        <a href={items.recommendation} className='text-black !no-underline'>
                                            Recommendations of the XI Plan Review Committee. 
                                        </a>  
                                        <a href={items.more} className='text-black !no-underline'>More info</a>  
                                    </div>    
                                </div>    
                            )
                        })
                    }
                </div>
            </div>

            <div className='border-t-8 border-amber-600 p-6'>
                <AboutUgcContent/>
            </div>
        </div>
    </>
  )
}

export default NationalFacBody