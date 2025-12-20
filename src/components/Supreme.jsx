import React from 'react'
import StudentPortalContent from './StudentPortalContent'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Footer from './Footer'

function Supreme() {
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
    <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / Supreme Court Judgments
            </div>
            <div className="text-5xl mb-2 font-semibold">
            Supreme Court Judgments
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
    <div className='flex justify-center gap-24 px-32 py-20 flex-wrap'>
        <div className='flex flex-col flex-wrap'>
                <div className='text-4xl mb-3 text-amber-600 font-semibold'>
                    Supreme Court Judgment Chhattisgarh
                </div>
                <div className='max-w-2xl flex flex-col gap-3 '>
                    <div className='flex gap-2 items-center'>
                        <i className='fa fa-arrow-circle-right text-amber-600'/><div>Hon'ble Supreme Court of India Judgment dt. 22.01.2018 in the case of Orissa Lift Irrigation v Rabi Sankar Patro</div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <i className='fa fa-arrow-circle-right text-amber-600'/><div>Hon'ble Supreme Court of India Judgment dt. 03.11.2017 in the case of Orissa Lift Irrigation v Rabi Sankar Patro, SLP (C) Nos. 19807-808/2012, and connected cases before 
                    </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <i className='fa fa-arrow-circle-right text-amber-600'/><div>Supreme Court Judgement on UGC NET Exam</div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <i className='fa fa-arrow-circle-right text-amber-600'/><div>Supreme Court Judgment on Private Universities in Chhattisgarh</div>
                    </div>
                </div>
        </div>
                
        <div className='border-t-8 border-amber-600 p-6'>
                <StudentPortalContent/>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Supreme