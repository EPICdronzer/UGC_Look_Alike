import React from 'react'
import AboutUgcContent from './AboutUgcContent'

function LogoBody() {
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
                    Logo
                </div>
                
                    <div className='flex flex-wrap gap-4'>
                        <div className='w-full'>
                            <img className='float-left mr-8 border-2 border-gray-200' src="https://www.ugc.gov.in/Content/images/MainPage/ugc.jpg"/>
                            <p className="text-justify">
                                
                                It was something that Prime Minister, Shri Atal Bihari Vajpayee, said during his speech on the occasion of the initiation of the University Grants Commission (UGC) Golden Jubilee Year on 28 December, 2002 that sparked off the idea of revisiting the old UGC logo. In his speech, Shri Vajpayee spoke of the need to take a fresh look at the UGC Act, 1956 in the light of the new challenges for the education sector emerging in the twenty-first century. He also suggested that the Commission could consider changing its name to the `University Education Development Commission”. This name truly captures the changed role of the UGC in recent years.
                                Traditionally, UGC was entrusted with the task of co-ordination, formulation and maintenance of the standards of university education. To this end, it engaged itself in, among other things, framing regulations on minimum standards of education, determining standards of teaching, examination and research in universities, monitoring developments in the field of collegiate and university education, disbursing grants to universities and colleges and setting up common facilities, services and programmes for a group of universities in the form of Inter-University Centres.
                            </p>
                        </div>
                        
                        <div className='flex flex-wrap font-bold gap-1 items-center'>
                            View logo Report<i class="fa fa-file-pdf"/>
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

export default LogoBody