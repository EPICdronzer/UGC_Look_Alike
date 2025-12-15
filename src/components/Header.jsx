import { Link, NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-center items-center bg-[#ff6c3a] mt-1 w-full">
      <ul className="flex flex-wrap items-center p-0 m-0">
      
        <li>
          <NavLink to="/" className="font-bold text-md flex justify-center items-center gap-1 cursor-pointer 
            text-white hover:!text-[#ff6c3a] hover:bg-white px-2.5 py-3 transition-colors duration-300 h-full !no-underline">
            <i className="fa-solid fa-home" />Home
          </NavLink>
        </li>

        <li className="relative group">
          <button className="flex items-center gap-1 text-white font-bold px-2.5 py-3 hover:bg-white hover:!text-[#ff6c3a] transition-colors duration-200">
            <i className="fa-solid fa-circle-info" /> About us
            <i className="fa-solid fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180" />
          </button>

          <ul className="absolute left-0 top-full w-72 mt-0 p-0 bg-white rounded-md shadow-lg z-50 hidden group-hover:block ">
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 w-full py-2.5 px-4 pt-3.5"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/Genesis" className="!text-inherit !no-underline">Genesis</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/Mandate" className="!text-inherit !no-underline">Mandate</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/UGCAct" className="!text-inherit !no-underline">UGC Act</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/Logo" className="!text-inherit !no-underline">Logo</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="https://www.ugc.gov.in/pdfnews/UGC%20Organisational%20Chart.pdf" className="!text-inherit !no-underline">UGC Organisational Chart</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/UGCBureaus" className="!text-inherit !no-underline">UGC Bureaus</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/UGCOffices" className="!text-inherit !no-underline">UGC Offices</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/InterUniversityCentres" className="!text-inherit !no-underline">Inter University Centres</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="/NationalFacilities" className="!text-inherit !no-underline">National Facilities</NavLink></li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 rounded-b-md py-2.5 px-4 pb-3.5"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i><NavLink to="https://www.ugc.gov.in/pdfnews/7670867_UGC-Certificate.pdf" className="!text-inherit !no-underline">Web Security Audit Certificates</NavLink></li>
              </ul>
        </li>
     

        <li className="relative group">
          <button className="flex items-center gap-1 text-white font-bold px-2.5 py-3 hover:bg-white hover:!text-[#ff6c3a] transition-colors duration-200">
            <i className="fa-solid fa-building" /> Organisation
            <i className="fa-solid fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180" />
          </button>

          <ul className="absolute left-[-250px] top-full w-auto mt-0 bg-white rounded-md shadow-lg z-50 hidden group-hover:block p-4 flex flex-col">
            <div className="flex gap-64">
                <li>
                  <div className="  !text-[#ff6c3a] cursor-pointer text-xl mb-2 font-semibold">Commission</div>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Commission Members</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Commission Decisions</li>
                </li>
                <li>
                  <div className="  !text-[#ff6c3a] cursor-pointer text-xl mb-2 font-semibold">Administration</div>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Chairman</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Vice Chairman</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Secretary</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Financial Advisor</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Additional Secretaries</li>
                </li>
                <li className="mr-40">
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Joint Secretaries</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Deputy Secretaries</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Education Officers</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Under Secretaries</li> 
                </li>
            </div>
            <div className="flex mt-7">
              <div className="border-r-2 border-gray-400 pr-6">
                Former Chairpersons
              </div>
              <div className="border-r-2 border-gray-400 pr-6 pl-6">
                Former Vice - Chairpersons
              </div>
              <div className=" pl-6">
                Former Secrataries
              </div>
            </div>
          </ul>
        </li>

        <li>
          <a className="font-bold text-md flex justify-center items-center gap-1 cursor-pointer 
            text-white hover:!text-[#ff6c3a] hover:bg-white px-2.5 py-3 transition-colors duration-300 h-full !no-underline">
            <i className="fa-solid fa-pencil" /> Key Initiatives
          </a>
        </li>
        
        <li>
          <a className="font-bold text-md flex justify-center items-center gap-1 cursor-pointer 
            text-white hover:!text-[#ff6c3a] hover:bg-white px-2.5 py-3 transition-colors duration-300 h-full !no-underline">
            <i className="fa-solid fa-circle-info" />Guidelines
          </a>
        </li>
        
        <li>
          <a className="font-bold text-md flex justify-center items-center gap-1 cursor-pointer 
            text-white hover:!text-[#ff6c3a] hover:bg-white px-2.5 py-3 transition-colors duration-300 h-full !no-underline">
           <i className="fa-solid fa-list" />Regulations
          </a>
        </li>



        <li className="relative group">
          <button className="flex items-center gap-1 text-white font-bold px-2.5 py-3 hover:bg-white hover:!text-[#ff6c3a] transition-colors duration-200">
            <i className="fa-solid fa-building" /> HEIs
            <i className="fa-solid fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180" />
          </button>

          <ul className="absolute left-[-900px] top-full w-auto mt-0 bg-white rounded-md shadow-lg z-50 hidden group-hover:block p-4">
            <div className="flex gap-20">
                <li>
                  <div className="  !text-[#ff6c3a] cursor-pointer text-xl mb-2 font-semibold">Universities</div>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i> Central Universities</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>
                  State Universities
                  </li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>
                  Deemed to be Universities
                  </li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>
                  State Private Universities
                  </li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>
                  Fake Universities</li>
                </li>
                <li>
                  <div className="  !text-[#ff6c3a] cursor-pointer text-xl mb-2 font-semibold">Colleges</div>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Colleges (12(B)/2(f))</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Autonomous Colleges</li>
                </li>
                <li>
                  <div className="  !text-[#ff6c3a] cursor-pointer text-xl mb-2 font-semibold">Institution</div>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Institutions of National Importance</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i> Institutions of Eminence</li>
                </li>
                <li className="mr-2">
                  <div className="  !text-[#ff6c3a] cursor-pointer text-xl mb-2 font-semibold">HEIs Violating Regulations</div>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>List of Fake Universities</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>List of HEIs not Following Ph.D Regulations</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>List of HEIs not appointed Ombudsperson</li>
                  <li className=" p-2 hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 w-max"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>List of Defaulter State (Private) Universities</li> 
                </li>
            </div>
          </ul>
        </li>
        

        <li>
          <a className="font-bold text-md flex justify-center items-center gap-1 cursor-pointer 
            text-white hover:!text-[#ff6c3a] hover:bg-white px-2.5 py-3 transition-colors duration-300 h-full !no-underline">
           <i className="fa-solid fa-landmark" />FHEI List
          </a>
        </li>


        <li className="relative group">
          <button className="flex items-center gap-1 text-white font-bold px-2.5 py-3 hover:bg-white hover:!text-[#ff6c3a] transition-colors duration-200">
            <i className="fa-solid fa-book" /> e-Publications
            <i className="fa-solid fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180" />
          </button>

          <ul className="absolute left-0 top-full w-80 mt-0 p-0 bg-white rounded-md shadow-lg z-50 hidden group-hover:block ">
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 w-full py-2.5 px-4 pt-3.5"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i> e-Books</li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Annual Reports/ Annual Accounts</li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Press Release</li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4 "><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Logo</li>
                <li className="  hover:bg-gray-100 hover:text-[#ff6c3a] cursor-pointer text-gray-700 border-b border-gray-400 py-2.5 px-4  pb-3.5"><i class="fa-solid fa-angle-right text-[#ff6c3a]"></i>Activities Publications</li>
          </ul>
        </li>
        

      </ul>
      <Outlet/>
    </nav>
  );
}

export default Header;
