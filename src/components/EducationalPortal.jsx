import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import StudentPortalContent from './StudentPortalContent'
import Footer from './Footer'

function EducationalPortal() {
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
            Educational Loan
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
    <div className='flex justify-center gap-24 px-32 py-20 flex-wrap'>
        <div className='flex flex-col flex-wrap text-justify'>
                <div className='text-4xl mb-3 text-amber-600 font-semibold'>
                    Educational Loan
                </div>
                <div className='max-w-2xl flex flex-col gap-24'>
                    <div className='flex gap-5  flex-col'>
                        <div>Vidya Lakshmi is a first of its kind portal for students seeking Education Loan. This portal has been developed under the guidance of Department of Financial Services, (Ministry of Finance) , Department of Higher Education (Ministry of Human Resource Development) and Indian Banks Association (IBA).The portal has been developed and being maintained by NSDL e-Governance Infrastructure Limited. Students can view, apply and track the education loan applications to banks anytime, anywhere by accessing the portal. The portal also provides linkages to National Scholarship Portal. <a className='font-bold !no-underline' href="https://www.vidyalakshmi.co.in/Students/about-us">Click Here to Apply for an Educational Loan</a></div>
                        <div>
                        The Salient features of the scheme are as under:
                        </div>
                        
                    </div>
                    

                    <div className='flex gap-5  flex-col'>
                        <div>
                            The scheme envisages loans up to Rs.7.5 lakh for studies in India and up to Rs. 15 lakh for studies abroad.
                        </div>
                        <div>
                            For loans up to Rs. 4 lakh no collateral or margin is required and the interest rate is not to exceed the Prime Lending Rates (PLR). For loans above Rs. 4 lakh the interest rate will not exceed PLR plus 1 percent.
                        </div>
                        <div>
                            The loans are to be repaid over a period of 5 to 7 years with provision of grace period of one year after completion of studies
                        </div>
                        <div className='font-bold text-4xl'>
                            Tax Benefit
                        </div>
                        <div className='font-bold'>
                            Repayment of an education loan is deductible under section 80E of the Income Tax Act. The yearly limit for deduction is Rs. 40,000 (for both the principal and the interest). Only loans taken for higher education - full time studies in any graduate or post-graduate, professional, and pure and applied science courses - may claim deduction. The deduction will be available for a maximum of eight years starting from the day you start repaying.
                        </div>
                        <div>
                            Equitable Access to quality higher education has been a concern of the University Grants Commission. To this purpose the Commission, besides encouraging colleges and universities to provide for liberal financial support to the meritorious but needy students, has also been instrumental in educational loan scheme. The Reserve Bank of India (RBI) has issued guidelines in this regard to all commercial banks. A large number of banks have already launched educational loan schemes. Provided below are links to the respective website of individual banks offering such facilities.
                        </div>
                        
                        <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.allahabadbank.com/">Allahabad Bank</a>
                            </div>
                            <div>
                                Educational Loan Scheme  Application Form
                            </div>
                        </div>
                        <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://andhrabank.in/">Andhra Bank</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.bankofbaroda.com/">Bank of Baroda</a>
                            </div>
                            <div>BOB Scholar Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://bankofindia.bank.in/home/startpage.asp">Bank of India</a>
                            </div>
                            <div>Vidya Vardhini Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.bankofmaharashtra.in/">Bank of Maharashtra</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://www.canarabank.bank.in/Errors/PageNotFound">Canara Bank</a>
                            </div>
                            <div>Vidyasagar Loan Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://www.centralbankofindia.co.in/">Central Bank of India</a>
                            </div>
                            <div>Centvidhyarath Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.corpbank.com/">Corporation Bank</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.denabank.com/index.jsp">Dena Bank</a>
                            </div>
                            <div>Dena Vidya Laxmi Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://www.indianbank.in/">Indian Bank</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://iob.in/Home.asp">Indian Overseas Bank</a>
                            </div>
                            <div>Vidya Jothi Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.obcindia.co.in/index.asp">Oriental Bank of Commerce</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.psbindia.com/">Punjab and Sindh Bank</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://pnb.bank.in/">Punjab National Bank</a>
                            </div>
                            <div>Vidyalaksyapurti Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.sbi.co.in/">State Bank of India</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.sbbjbank.com/">State Bank of Bikaner and Jaipur</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.sbhyd.com/">State Bank of Hyderabad</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.sbhyd.com/">State Bank of Indore</a>
                            </div>
                            
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.statebankofmysore.co.in/">State Bank of Mysore</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://www.sbsbank.com/">State Bank of Saurashtra</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.statebankoftravancore.com/home45.htm">State Bank of Travancore</a>
                            </div>
                            <div>Gyan Jyothi Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://syndicatebank.in/">Syndicate Bank</a>
                            </div>
                            <div>SyndVidya Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://www.ucobank.com/">UCO Bank</a>
                            </div>
                            <div>Educational Loan Scheme</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="https://www.unionbankofindia.co.in/">Union Bank of India</a>
                            </div>
                            <div>SyndVidya Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="http://www.unitedbankofindia.com/">United Bank of India</a>
                            </div>
                            <div>Educational Loan Scheme Application Form</div>
                            </div>

                            <div>
                            <div className='font-bold'>
                                <a className="!no-underline" href="www.vijayabank.com">Vijaya Bank</a>
                            </div>
                            <div>Education Loan Scheme Application Form</div>
                            </div>

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

export default EducationalPortal