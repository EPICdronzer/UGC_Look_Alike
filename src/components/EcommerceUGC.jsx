import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Footer from './Footer'
import data from "../JsonData/EcomData.json"
function EcommerceUGC() {
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
            <div className='w-full justify-center items-center flex flex-wrap gap-5 mt-10 px-20'>
                {
                    data.map((items)=>(
                        
                        <a className='!no-underline' href={items.link}>
                            <div className='max-w-sm min-h-[250px] bg-white shadow-2xl rounded-2xl p-4 flex flex-col gap-4 justify-center items-center'>
                                <img className='w-80 h-32' src={items.image}/>
                                <div className='w-full font-bold text-xl text-center text-gray-700 hover:!text-amber-600'>{items.title}</div>
                            </div>
                        </a>   
                    ))
                }
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default EcommerceUGC