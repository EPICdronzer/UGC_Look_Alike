import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import StudentPortalContent from './StudentPortalContent'
import Footer from './Footer'

function EduAbroad() {
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
    <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / Edu Abroad for Indian Students
            </div>
            <div className="text-5xl mb-2 font-semibold">
            Edu Abroad for Indian Students
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
    <div className='flex justify-center gap-24 px-32 py-20 flex-wrap'>
        <div className='flex flex-col flex-wrap text-justify'>
                <div className='text-4xl mb-3 text-amber-600 font-semibold'>
                    Edu Abroad for Indian Students
                </div>
                <div className='max-w-2xl flex flex-col gap-24'>
                    <div className='flex gap-5  flex-col'>
                        <div><span className='font-bold'>Advisory for Indian Students seeking Admission in London College of Management and IT, London </span>
Ministry of Human Resource Development, Govt. of India in a letter to UGC has forwarded a copy of the <span className='font-bold'>communication sent by Ms. Smita Puroshottam, </span> Minister (political), the High Commission of India, London, to the UGC regarding the fraudulent claims made to Indian students by the London College of Management, London ( details of the communication received ) .</div>
                    </div>

                    <div className='flex gap-5  flex-col'>
                        <div>
                            <span className='font-bold'>Advisory for Indian Students seeking Admission in Foreign Universities/Institutions </span>
University Grants Commission has received several complaints from Indian students pursuing studies abroad regarding misleading claims being made by foreign universities/institutions in respect of the courses offered by them and validity of their degrees.
                        </div>
                        <div>
                            In order to avoid misguidance of Indian students by Foreign Universities/Institutions, UGC has decided to issue an advisory to students as under -
                        </div>
                        <div>
                            All Indian students wishing to pursue studies abroad may contact the Association of Indian Universities (AIU), AIU House, 16, Comd. Indrajit Gupta Marg,(Kotla Marg), New Delhi -110002 (Phones :+91-11-23230059, 23232305, 23233390, 23231097 23232429,32232435 Fax:+91-11 23232131) or visit their website www.aiuweb.org for information regarding the accreditation status of foreign universities and the valuation and equivalence of degrees and diplomas awarded by the accredited universities abroad .
                        </div>
                    </div>

                    <div className='flex gap-5  flex-col'>
                        <div><a href='https://www.ugc.gov.in/oldpdf/students_pdf/adi_SAI.pdf' className='font-bold !no-underline'>Information for Indian Students about Admission in South Asian Institute, Heidelberg</a></div>
                        <div><a href='https://www.ugc.gov.in/oldpdf/students_pdf/EWindstu.pdf' className='font-bold !no-underline'>East-West Center Edu-programme</a></div>
                        <div><span className='font-bold'>Indian students seeking admission in MBBS courses in China </span><br/>
Ministry of Human Resource Development, Govt. of India has forwarded a copy of the communication sent by embassy of India,Beijing,China to the UGC regarding Indian students seeking admission in MBBS courses in China (details of the communication received).</div>
                    </div>

                    <div className='flex gap-5  flex-col'>
                        <div><span className='font-bold'>Erasmus Mundus programme</span><br/>
The Erasmus Mundus programme is a co-operation and mobility programme in the field of higher education. It aims to enhance quality in European higher education and to promote intercultural understanding through co-operation with third countries. For more details on the programme click on this <a href='http://europa.eu.int/comm/education/programmes/mundus/index_en.html' className='font-bold !no-underline '>Link</a></div>
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

export default EduAbroad