import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

function AboutUgc() {
  return (
    <>
        <HeaderTop/>
        <HeaderMid/>
        <Header/>
        <div>
            <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
                <div className='text-amber-600'>
                    Home/
                </div>
                <div className="text-5xl mb-2">
                    About uGC
                </div>
                <div className='text-xl font-semibold'>
                    University Grants Commission
                </div>
            </div>
            <div>
                <div className='flex justify-center gap-7 px-40 py-20'>
                    <div className='flex flex-col'>
                        <div className='text-4xl mb-3 text-amber-600'>
                            About UGC
                        </div>
                        <div className='text-justify mb-3'>
                            The University Grants Commission is a statutory organization under the Ministry of Education, Government of India, established by an Act of Parliament in 1956 for the promotion and co-ordination of University education and for the determination and maintenance of standards of teaching, examination and research in Universities, and for the purpose of performing its functions under this Act. In addition to providing grants to eligible universities and colleges, the Commission also advises the Central and State Governments on the measures which are necessary for the development of Higher Education.
                        </div>
                        <div className='text-justify mb-3'>
                            The offices of the UGC are located in three locations in Delhi: Bahadur Shah Zafar Marg in New Delhi, 35, Feroze Shah Road, and the South Campus of the University of Delhi.
                        </div>
                        <div className='flex w-full items-end justify-end'>
                            <NavLink className="!text-inherit !no-underline" to="/">
                                <button className=" hover:!bg-white hover:!text-amber-600 bg-[#ff6c3a] text-white w-32 h-12 !rounded-full !text-sm font-semibold items-center justify-center">
                                    Back
                                </button>
                            </NavLink> 
                        </div>
                        

                    </div>    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default AboutUgc