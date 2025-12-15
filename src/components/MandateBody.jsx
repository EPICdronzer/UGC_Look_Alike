import React from 'react'
import AboutUgcContent from './AboutUgcContent'

function MandateBody() {
  return (
    <>
        <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
                Home/
            </div>
            <div className="text-5xl mb-2">
                Mandate
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
        <div className='flex justify-center gap-7 px-32 py-20'>
            <div className='flex flex-col'>
                <div className='text-4xl mb-3 text-amber-600'>
                    Mandate
                </div>
                <div className='text-justify'>
                    The UGC has the unique distinction of being the only grant-giving agency in the country which has been vested with two responsibilities: that of providing funds and that of coordination, determination and maintenance of standards in institutions of higher education.

                </div>
                <br/>

                <div className='font-bold'>
                    The UGC`s mandate inc+ludes:
                </div>

                <br/>

                <div className='flex flex-wrap flex-col gap-2'>
                    <div class="flex gap-2 items-center"><i class="fa fa-check-circle fa-sm text-amber-600"/>Promoting and coordinating university education.</div>
                    <div class="flex gap-2 items-center"><i class="fa fa-check-circle fa-sm text-amber-600"/>Determining and maintaining standards of teaching, examination and research in universities.</div>
                    <div class="flex gap-2 items-center"><i class="fa fa-check-circle fa-sm text-amber-600"/>Framing regulations on minimum standards of education.</div>
                    <div class="flex gap-2 items-center"><i class="fa fa-check-circle fa-sm text-amber-600"/>Monitoring developments in the field of collegiate and university education; disbursing grants to the universities and colleges.</div>
                    <div class="flex gap-2 items-center"><i class="fa fa-check-circle fa-sm text-amber-600"/>Serving as a vital link between the Union and state governments and institutions of higher learning.</div>
                    <div class="flex gap-2 items-center"><i class="fa fa-check-circle fa-sm text-amber-600"/>Advising the Central and State governments on the measures necessary for improvement of university education.</div>
                    


                </div>
            </div>
            <div className='border-t-8 border-amber-600 p-6'>
                <AboutUgcContent/>
            </div>
        </div>
    </>
  )
}

export default MandateBody