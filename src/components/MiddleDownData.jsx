import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function MiddleDownData() {
     const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <div >
        <div className='flex flex-col justify-center items-center gap-4 pt-10 pb-10 mb-10 bg-gray-100'>
            <div className='text-3xl font-bold text-[#3E4C66]'><span className='text-[#ff6c3a]'>Star Performer </span> of the Month</div>
            <div class="flex flex-wrap justify-evenly items-center w-full mt-3 mb-3">
                <div className='w-40'><img className='rounded-br-2xl rounded-tl-2xl' src="https://www.ugc.gov.in/Content/images/Star_Performer/0294894_Ms.-SUNITA.jpg"/></div>
                <div className='w-40'><img className='rounded-br-2xl rounded-tl-2xl' src="https://www.ugc.gov.in/Content/images/Star_Performer/6018559_Umesh-Sharma-Jan-2025.jpg"/></div>
                <div className='w-40 '><img className='rounded-br-2xl rounded-tl-2xl' src="https://www.ugc.gov.in/Content/images/Star_Performer/3224992_Sridhar-Jagilinki-Assistant.jpg"/></div>
                <div className='w-40'><img className='rounded-br-2xl rounded-tl-2xl' src="https://www.ugc.gov.in/Content/images/Star_Performer/1989216_Raj-Kumari-US.jpg"/></div>
            </div>
            <button className='rounded-4xl w-32 h-12 bg-[#3E4C66] text-white !rounded-full'>View All</button>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-10'>
            <div className='bg-white rounded-b-2xl w-sm h-80 shadow-lg flex  flex-col'>
                <div className='bg-[#3D344B] rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                    <div className='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg'>
                        Notices
                    </div>
                    
                </div>
                <div className="w-full h-[150px] p-2">
                <marquee direction="up" scrollamount="3" behavior="scroll" height="150">
                    📢 UGC New Initiative Launched<br />
                    Digital portal update live now!<br />
                    📢 Scholarship Portal Open<br />
                    Apply before the last date.<br />
                    📢 Stay Tuned for Events!
                </marquee>
                </div>
            </div>
            <div className='bg-white rounded-b-2xl w-sm h-80 shadow-lg flex  flex-col'>
                <div className='bg-[#3D344B] rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                    <div className='bg-[#1F7DDA] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg'>
                        Circulars
                    </div>
                    
                </div>
                <div className="w-full h-[150px] p-2">
                <marquee direction="up" scrollamount="3" behavior="scroll" height="150">
                    📢 UGC New Initiative Launched<br />
                    Digital portal update live now!<br />
                    📢 Scholarship Portal Open<br />
                    Apply before the last date.<br />
                    📢 Stay Tuned for Events!
                </marquee>
                </div>
            </div>
            <div className='bg-white rounded-b-2xl w-sm h-80 shadow-lg flex  flex-col'>
                <div className='bg-[#3D344B] rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                    <div className='bg-[#407F46] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg'>
                        International Cooperation
                    </div>
                    
                </div>
                <div className="w-full h-[150px] p-2">
                <marquee direction="up" scrollamount="3" behavior="scroll" height="150">
                    📢 UGC New Initiative Launched<br />
                    Digital portal update live now!<br />
                    📢 Scholarship Portal Open<br />
                    Apply before the last date.<br />
                    📢 Stay Tuned for Events!
                </marquee>
                </div>
            </div>
            <div className='bg-white rounded-b-2xl w-sm h-80 shadow-lg p-7'>
                <div className="pb-4 text-[#3E4C66] text-xl font-bold border-b-4 border-[#ff6c3a] mb-4">
                    Anti-ragging / e-Samadhaan
                </div>
                <div className='text-red-500 opacity-75 font-semibold flex justify-start'>
                    24x7 Helpline Number<br/>
                    1800-180-5522 (Toll Free)
                </div>
                <img src="https://www.ugc.gov.in/Content/images/MainPage/E-samadhan_Logo_New.png"/>
                
            </div>
            <div className='bg-white rounded-b-2xl w-sm h-80 shadow-lg p-7'>
                <div className="pb-4 text-[#3E4C66] text-xl font-bold border-b-4 border-[#ff6c3a] mb-4">
                    Helpline Number @UGC
                </div>
                <marquee className="font-semibold opacity-75" direction="up" scrollamount="3" behavior="scroll" height="150">
                    UGC Office Helpline: 011-23604446,<br/>
                    011-23604200<br/><br/>
                    Covid -19 Helpline: 1800-111-657<br/>
                    Email: covid19help.ugc@gov.in<br/><br/>
                    Scholarship/Fellowship Helpline: 011-23604505<br/>
                    Email: netjrf-ugc@gov.in<br/><br/>
                    National Scholarship Portal Helpline: 0120-6619540<br/>
                    Email: helpdesk@nsp.gov.in<br/><br/>
                    UGC e-Samadhan Portal: 1800-111-656 (General Inquiry),<br/>
                    +91 79-2326-8279 (For Technical Queries)<br/><br/>
                    Anti-ragging Helpline: 1800-180-5522<br/>
                    Email: helpline@antiragging.in
                </marquee>
            </div>
            <div className='bg-white rounded-b-2xl w-sm h-80 shadow-lg p-7'>
                <div className="pb-4 text-[#3E4C66] text-xl font-bold border-b-4 border-[#ff6c3a] mb-4">
                    RTIs
                </div>
                <marquee className="font-semibold opacity-75" direction="up" scrollamount="3" behavior="scroll" height="150">
                    
                <ul>
                     <li>Right to Information Act</li><br/>
                     <li>Consolidated Quarterly Return from CPIOs of University Grants Commission, New Delhi</li><br/>
                     <li>Information to be published in pursuance of section 4(1)(b) of Right to Information Act, 2005 (BEING UPDATED)</li><br/>
                     <li>Central Public Information Officer & Appellate Authority as on 22.11.2022</li>
                </ul></marquee>
                

            </div>
        </div>

        <div className="flex flex-wrap flex-col justify-center items-center gap-10 pt-10 pb-10 bg-gray-100 
                w-full mx-auto">
  
            <div className="text-3xl font-bold text-[#3E4C66] text-center">
                <span className="text-[#ff6c3a]">Social Media </span>Engagements
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10">
    
            
            <div className="flex flex-col justify-center items-center">
            <div className="bg-blue-600 p-4 px-6 rounded-t-full flex justify-center items-center shadow-md">
                <i className="fa-brands fa-facebook-f text-white text-3xl"></i>
            </div>
            <div className="w-64 sm:w-72 md:w-80 lg:w-xl h-52 bg-white border-blue-600 border-2 rounded-b-xl shadow-md flex justify-center items-center">
                <p className="text-blue-600 font-semibold text-center">Facebook Stats Here</p>
            </div>
            </div>

            <div className="flex flex-col justify-center items-center">
            <div className="bg-red-600 p-4 px-6 rounded-t-full flex justify-center items-center shadow-md">
                <i className="fa-brands fa-youtube text-white text-3xl"></i>
            </div>
            <div className="w-64 sm:w-72 md:w-80 lg:w-xl h-52 bg-white border-red-600 border-2 rounded-b-xl shadow-md flex justify-center items-center">
                <p className="text-red-600 font-semibold text-center">YouTube Stats Here</p>
            </div>
            </div>

            </div>
        </div>



        <div className="flex flex-wrap flex-col justify-center items-center gap-10 pt-10 
                            w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
            
            <div className="text-3xl font-bold text-[#3E4C66]">
                <span className="text-[#ff6c3a]">Digital </span>Initiatives
            </div>

            <Slider className="w-full flex flex-wrap gap-2" {...settings}>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/logo-1.jpg" alt="1" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/m1.png" alt="2" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/logo-3.jpg" alt="3" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/logo-4.jpg" alt="4" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/logo-5.jpg" alt="5" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/logo-2.jpg" alt="6" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/DEB.jpg" alt="7" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/NTA.jpg" alt="8" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/MainPage/UAMP.jpg" alt="9" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/eGovernance/UTSAH.jpg" alt="10" />
                </div>
                <div className="w-36 h-24 bg-white !flex justify-center items-center rounded-lg shadow-md">
                <img className="h-16 w-auto object-contain" src="https://www.ugc.gov.in/Content/images/eGovernance/PoP_Portal.jpg" alt="11" />
                </div>
            </Slider>
            </div>

        
    </div>
  )
}

export default MiddleDownData