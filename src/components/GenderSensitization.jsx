import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import StudentPortalContent from './StudentPortalContent'
import Footer from './Footer'

function GenderSensitization() {
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
    <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / Gender Sensitization Data
            </div>
            <div className="text-5xl mb-2 font-semibold">
            Gender Sensitization Data
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
    <div className='flex justify-center gap-24 px-32 py-20 flex-wrap'>
        <div className='flex flex-col flex-wrap text-justify gap-2'>
                <div className='text-4xl mb-3 text-amber-600 font-semibold max-w-2xl'>
                    Gender Sensitization Data in Universities and Colleges in India
                </div>
                <div className='max-w-2xl flex flex-col gap-3'>
                    
                        <div className='flex items-center gap-1'> 
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2022-23 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8883133_Data-of-Sexual-harassment-in-Universities.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/6548588_Data-of-Sexual-harassment-in-colleges.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2021-22 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/5389750_Sexual-Harrassment-2021-22-Universities.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/3254032_Sexual-harrassment-2021-22-College.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2020-21 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/9338971_Sexual-Harassment-2020-21-University.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/9292057_Sexual-Harassment-2020-21-College.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2019-20 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/3401347_Sexual-Harassment-2019-20-University.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8682581_Sexual-Harassment-2019-20-College.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2018-19 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/1564170_Sexual-Harassment-2018-19-University.pdf'>Universities </a><a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8672552_Sexual-Harassment-2018-19-College.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2017-18 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/4785902_Sexual-Harassment-2017-18-University.pdf'>Universities </a><a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8299407_Sexual-Harassment-2017-18-College.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2016-17 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8036379_Sexual-Harassment-2016-17-University.pdf'>Universities </a><a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/4789711_Sexual-Harassment-2016-17-University.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>A list of cases of sexual harassment in 2015-16 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/4061213_Sexual-Harassment-2015-16-University.pdf'>Universities </a><a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/0654987_Sexual-Harassment-2015-16-College.pdf'>Colleges</a></div>
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

export default GenderSensitization