import React from 'react'
import Footer from './Footer'
import StudentPortalContent from './StudentPortalContent'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'

function GenderChampion() {
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
    <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / Gender Champion
            </div>
            <div className="text-5xl mb-2 font-semibold">
            Gender Champion
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
    <div className='flex justify-center gap-24 px-32 py-20 flex-wrap'>
        <div className='flex flex-col flex-wrap text-justify'>
                <div className='text-4xl mb-3 text-amber-600 font-semibold'>
                    Gender Champions in Institutions
                </div>
                <div className='max-w-2xl flex flex-col'>
                    <div className='flex gap-3 flex-col'>
                        <div className='font-bold'>With the aim to make the young boys & girls gender sensitive & create positive social norms that value the girls and their rights in their campus and to select responsible leaders who will facilitate an integrated & interdisciplinary approach, understanding the socio-cultural constructions of gender that shape the experience of women & men in society, UGC has issued guidelines & shared with all educational institutions to implement it.</div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><a className='!no-underline' href="https://www.ugc.gov.in/pdfnews/7284626_Gender-Champion.pdf">Guidelines for Gender Champions in Universities and Colleges</a>
                        </div>
                        <div className='flex items-center gap-1'> 
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2022-23 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/7274171_Data-of-Gender-champion-in-universities.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8352281_Data-of-Gender-champion-in-colleges.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2021-22 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/7297766_Gender-Champion-2021-22-Universities.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/6802889_Gender-Champion-2021-22-Colleges.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2020-21 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/6249877_University-Gender-Champion-data-2020-21.pdf'>Universities </a> <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/7665994_College-Gender-Champion-data-2020-21.pdf'>Colleges</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2019-20 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/4044842_Gender-Champion-List-Statewise-Latest-2019-2020-Uni.pdf'>Universities</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2018-19 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/5441157_Gender-Champion-List-Statewise-Latest-2018-19-Uni.pdf'>Universities</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2017-18 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/3855433_Gender-Champion-List-statewise-Latest-2017-18-Uni.pdf'>Universities</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2016-17 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/8572803_Gender-Champion-List-Statewise-Latest-2016-17.pdf'>Universities</a></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='fa fa-arrow-circle-right'/><div>Gender Champion List State wise 2015-16 <a className='!no-underline' href='https://www.ugc.gov.in/pdfnews/2394734_gender-champion-university-old-2015-16.pdf'>Universities</a></div>
                        </div>
                        <div className='font-bold'>
                            Submit the Action taken on implementing the Guidelines of Gender Champions in Higher Education Institutions during one year
                        </div>
                        <a className='!no-underline' href='https://docs.google.com/forms/d/e/1FAIpQLSeF1RjOo2Aki8dFvh6kkKZzNasI_ucPSUKkyqVU1w7Q_U6sFA/viewform'>
                            SUBMIT DETAILS
                        </a>
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

export default GenderChampion