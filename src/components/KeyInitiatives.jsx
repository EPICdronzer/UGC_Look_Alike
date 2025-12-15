import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'
import data from "../JsonData/KeyInitiativesData.json"
import { NavLink } from 'react-router-dom'
function KeyInitiatives() {
  return (
    <>
        <HeaderTop/>
        <HeaderMid/>
        <Header/>
        <div>
            <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
                <div className='text-amber-600'>
                   Home / e-Governance @UGC
                </div>
                <div className="text-5xl mb-2 font-bold">
                    e-Governance @UGC
                </div>
                <div className='text-xl font-semibold'>
                    University Grants Commission
                </div>
            </div>
            <div className='w-full justify-center items-center flex flex-wrap gap-3 mt-10'>
                {
                    data.map((items)=>(
                        
                        <NavLink to={`/keyInitiatives/keyInitiativesDisplay/${items.id}`} className='!no-underline'>
                            <div className='max-w-xs min-h-[600px] bg-white shadow-2xl rounded-2xl p-4 flex flex-col gap-4 '>
                                <img className='w-80 min-h-96' src={items.image}/>
                                <div className='w-full font-bold text-justify  text-gray-600 hover:!text-amber-600'>{items.title}</div>
                            </div>
                        </NavLink>   
                    ))
                }
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default KeyInitiatives