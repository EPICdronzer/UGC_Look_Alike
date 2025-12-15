import React from 'react'
import data from "../JsonData/InterUniCenter.json"
import AboutUgcContent from './AboutUgcContent'
import DisplayInterUni from './DisplayInterUni'
import { Link, NavLink, Outlet } from 'react-router-dom'
function InterUniCenterBody() {

  return (
    <>
        <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
                Home/ Inter University Centers
            </div>
            <div className="text-5xl mb-2">
                Inter University Centers
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
        <div className="flex flex-wrap gap-16 px-5 py-20 justify-center">
           
            <div className="flex flex-col gap-4">
                <div className="text-4xl mb-3 text-amber-600">
                    Inter University Centres
                </div>

                <div className="flex flex-wrap max-w-4xl">
                    {data.map((items) => (
                        <Link to={`/InterUniversityCentres/display/${items.id}`}
                            key={items.id}
                            className="px-3 pb-3 border-2 border-gray-200 
                                    basis-1/4 flex flex-col items-center !no-underline"
                        >
                            <img src={items.image} className="w-40 h-40 object-contain" />
                            <div className="mt-2 font-semibold">{items.name}</div>
                            <div className="text-gray-600">{items.address}</div>
                        </Link>
                        
                    ))}
                </div>

            </div>

            
            <div className='border-t-8 border-amber-600 p-6'>
                <AboutUgcContent/>
            </div>
        </div>

        
    </>
  )
}

export default InterUniCenterBody