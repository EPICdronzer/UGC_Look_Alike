import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function MiddleData() {

  const [data,setData]=useState(1)
  const renderDisplay=()=>{
    switch(data){
      case 1:
        return (
          <div class="flex flex-col justify-center items-center gap-10">
           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>e-Governance <span class="text-gray-700">@UGC</span></h2>
           <div class="flex gap-8 w-full text-gray-700 text-center">
             <div class="w-60 gap-4 flex flex-col items-center  
              border-2 border-gray-200 pt-4 pb-4 px-3 
              rounded-2xl shadow-md hover:shadow-xl 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 bg-white">
                
               <img class="w-48 h-16 "
                  src="https://www.ugc.gov.in/Content/images/eGovernance/7032830_UGC_Equivalence.jpg" />
              
              <div class="text-center font-bold text-gray-700">
                UGC Equivalence Portal
              </div>
            </div>

            <div class="w-60 gap-4 flex flex-col items-center 
              border-2 border-gray-200 pt-4 pb-4 px-3 
              rounded-2xl shadow-md hover:shadow-xl 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 bg-white">
              <img class="w-48 h-16" src="https://www.ugc.gov.in/Content/images/eGovernance/PhD_Citation_Portal.jpg"/>
              <div class="text-center font-bold text-gray-700">UGC Ph.D. Excellence Citation Portal</div>
            </div>
            <div class="w-60 gap-4 flex flex-col items-center 
              border-2 border-gray-200 pt-4 pb-4 px-3 
              rounded-2xl shadow-md hover:shadow-xl 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 bg-white">
              <img class="w-48 h-16" src="https://www.ugc.gov.in/Content/images/eGovernance/fhei_logo.png"/>
              <div class="text-center font-bold text-gray-700">UGC FHEI</div>
            </div>
            <div class="w-60 gap-4 flex flex-col items-center 
              border-2 border-gray-200 pt-4 pb-4 px-3 
              rounded-2xl shadow-md hover:shadow-xl 
              hover:-translate-y-1 hover:scale-105 
              transition-all duration-300 bg-white">
              <img class="w-48 h-16" src="https://www.ugc.gov.in/Content/images/eGovernance/mmmc.png"/>
              <div class="text-center font-bold text-gray-700">Malviya Mission</div>
            </div>
          </div>
          <NavLink to="/eComUGC">
            <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
              View All
            </button>
          </NavLink>
        </div>
        )
      case 2:
        return(
          <div class="flex justify-between items-between flex-wrap gap-4">
            <div class="flex flex-col flex-wrap w-xl gap-4">
              <h2 class="!font-bold !text-amber-600">Key <span class="text-gray-700">Initiatives</span></h2>
              <ul>
                <div class="flex gap-1 items-center flex-wrap"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Women Leaders: Shaping Academic Excellence for Viksit Bharat @ 2047</li></div>
                <div class="flex gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Compendium of UGC Regulations 1957-2023</li></div>
                <div class="flex flex-wrap gap-1"><div class="h-full"><i class="fa fa-xs fa-plus !text-amber-600"></i></div><li>List of Eligible Indian institutions to collaborate as per Regulations on Academic Collaboration between Indian and Foreign HEIs to offer Twinning, Joint Degree and Dual Degree Programmes in 2022 with foreign institutions.</li></div>
                <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Guidelines on Mulya Pravah 2.0</li></div>
                <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>National Higher Education Qualifications Framework (NHEQF)</li></div>
                <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Guidelines for Promotion at HEI</li></div>
                <div class="flex flex-wrap gap-1"><div class="h-full"><i class="fa fa-xs fa-plus !text-amber-600"></i></div><li>Guidelines for Training/Orientation of Faculty on Indian Knowledge System (IKS)</li></div>
                <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>National Credit Framework (NCrF)</li></div>
                <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Fostering Social Responsibility & Community Engagement 2.0</li></div>
              </ul>
              <NavLink to="/keyInitiatives">
              <button class="bg-gray-700 text-white !rounded-full py-3 w-xs">
                    View All Initiatives
              </button>
              </NavLink>
            </div>
              <img src="https://www.ugc.gov.in/Content/images/KeyInitiatives/KeyInitiatives.jpg" class="w-lg"/>
          </div>
        )
      case 3:
        return(
          <div class="flex flex-col justify-center items-center gap-10">
           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">Corner</span></h2>
          
           <div class='flex flex-wrap justify-center items-center gap-10'>
            <Link className="!no-underline " to="/studentCorner">
             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-graduation-cap text-2xl"></i>
                     </div>

                 </div>
                
                 <div class="pt-10">Fellowships</div>
             </div>
             </Link>
             
             <div class='flex flex-wrap justify-center items-center gap-10'>
            <Link className="!no-underline " to="/studentCorner">
             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa-solid fa-indian-rupee-sign text-2xl"></i>
                     </div>

                 </div>
                 <div class="pt-10">Scholarships</div>
             </div>
             </Link>
             <div class='flex flex-wrap justify-center items-center gap-10'>
              <Link className="!no-underline " to="/studentCorner">
             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-desktop text-2xl"></i>
                     </div>
                 </div>
                 <div class="pt-10">Portals / Helplines</div>
                
             </div>
             </Link>
           </div>
           </div>
            <Link to="/studentCorner">
              <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
                    View All
                  </button>
            </Link>
           
         </div>
         </div>
          
        )
      case 4:
        return(
          <div class="flex flex-col justify-center items-center gap-10">
           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">Corner</span></h2>
          
           <div class='flex flex-wrap justify-center items-center gap-10'>
             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-trophy text-2xl"></i>
                     </div>

                </div>
                
                 <div class="pt-10">UGC Research Awards</div>
             </div>
             <div class='flex flex-wrap justify-center items-center gap-10'>
             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-wheelchair text-2xl"></i>
                     </div>

                 </div>
                 <div class="pt-10">Portals / Helplines</div>
             </div>
             <div class='flex flex-wrap justify-center items-center gap-10'>
             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-stethoscope text-2xl"></i>
                     </div>

                 </div>
                 <div class="pt-10">Regulations</div>
                
             </div>
           </div>
           </div>

           <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
             View All
          </button>
         </div>
         </div>
        )
        case 5:
          return(
            <div class="flex flex-col justify-center items-center gap-10">
           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">Corner</span></h2>
          
         <div class='flex flex-wrap justify-center items-center gap-10'>
             <div class='flex-1 bg-white rounded-b-2xl h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-institution text-2xl"></i>
                     </div>

                 </div>
                
             <div class="pt-10 px-10">Central Universities<br/>57</div>
             </div>
           <div class='flex-1 bg-white rounded-b-2xl  h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-institution text-2xl"></i>
                     </div>
                </div>
                 <div class="pt-10 px-10">State Universities<br/>512</div>
          </div>
           <div class='flex-1 bg-white rounded-b-2xl h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-building text-2xl"></i>
                     </div>

                 </div>
                 <div class="pt-10 px-10">Deemed to be Universities<br/>147</div>
                
             </div>
             <div class='flex-1 bg-white rounded-b-2xl h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
                         <i class="fa fa-building text-2xl"></i>
                     </div>

                 </div>
                 <div class="pt-10 px-10">Private Universities<br/>540</div>
             </div>
         </div>
           <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
             View All
          </button>
         </div>
        )
      case 6:
        return(
          <div class="flex flex-col justify-center items-center gap-10">
           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">UGC Green Initiatives</span></h2>
          <img src="https://www.ugc.gov.in/Content/images/JPG/GREEN_PAGE_Final.jpg"/>
          </div>
        )
    }
    
  }
 
  return (
    <>
      <div className="bg-[#3D344B] w-full flex justify-center items-center flex-col py-16 gap-4 h-auto">
       <div className="flex flex-wrap justify-center items-center gap-3 text-[#5E5964] font-bold w-[90%] md:w-[85%]">

        <button
        id="btn1"
          onClick={() => setData(1)}
          className="middle-btn hover:active selected w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
                px-4 py-3 flex flex-col justify-center items-center gap-2 
                border-l-4 border-transparent hover:border-amber-600 bg-white 
                !rounded-xl shadow-md hover:shadow-xl 
                hover:scale-105 transition-all duration-300">
          <i className="fa fa-laptop text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
            <p className="pb-0 m-0">e-Governance</p>
            <p>@UGC</p>
          </div>
        </button>
      
        <button
        id="btn2"
        onClick={() => setData(2)}
        className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
        px-4 py-3 flex flex-col justify-center items-center gap-2 
        border-l-4 border-transparent hover:border-amber-600 
        bg-white !rounded-xl shadow-md hover:shadow-xl 
        hover:scale-105 transition-all duration-300">
          <i className="fa fa-hand text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
            <p className="pb-0 m-0">Key</p>
            <p>Initiatives</p>
          </div>
        </button>

        <button
        id="btn3"
        onClick={() => setData(3)}
        className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
        px-4 py-3 flex flex-col justify-center items-center gap-2 
        border-l-4 border-transparent hover:border-amber-600 
        bg-white !rounded-xl  shadow-md hover:shadow-xl 
        hover:scale-105 transition-all duration-300">
          <i className="fa fa-graduation-cap text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
            <p className="pb-0 m-0">Student</p>
            <p>Corner</p>
          </div>
        </button>

        <button
        id="btn4"
        onClick={() => setData(4)}
        className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
        px-1 py-3 flex flex-col justify-center items-center gap-2 
        border-l-4 border-transparent hover:border-amber-600 
        bg-white !rounded-xl  shadow-md hover:shadow-xl 
        hover:scale-105 transition-all duration-300">
          <i className="fa fa-users text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
            <p className="pb-0 m-0">Faculty Corner/</p>
            <p>Non-Teaching Staff</p>
          </div>
        </button>

        <button
        id="btn5"
        onClick={() => setData(5)}
        className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
        px-4 py-3 flex flex-col justify-center items-center gap-2 
        border-l-4 border-transparent hover:border-amber-600 
        bg-white !rounded-xl  shadow-md hover:shadow-xl 
        hover:scale-105 transition-all duration-300">
          <i className="fa fa-institution text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
            <p className="pb-0 m-0">Details of</p>
            <p>HEIs</p>
          </div>
        </button>

        <button
        id="btn6"
        onClick={() => setData(6)}
        className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
        px-3 py-3 flex flex-col justify-center items-center gap-2 
        border-l-4 border-transparent hover:border-amber-600 
        bg-white  !rounded-xl shadow-md hover:shadow-xl 
        hover:scale-105 transition-all duration-300">
          <i className="fa fa-globe text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
            <p className="pb-0 m-0">UGC</p>
            <div className="flex justify-center items-center">
              <p className="text-center">Green initiatives</p>
              <img
                src="https://www.ugc.gov.in/Content/images/JPG/blink_new.gif"
                alt="new"
                className="w-3 h-3 sm:w-4 sm:h-4 mb-1 ml-1"
              />
            </div>
          </div>
        </button>

      </div>

      <div id="changeArea" className="flex flex-wrap justify-center items-center w-[80%] bg-[#F1F1F1] h-auto rounded-2xl p-5 ">
        {renderDisplay()}
      </div>  
    </div>
    </>
  )
}

export default MiddleData







{/* 

// function activate(num){
//   document.querySelectorAll(".middle-btn").forEach(btn => {
//     btn.classList.remove("!border-l-4", "!border-amber-600");
//     btn.classList.add("!rounded-xl");
//   });

//   const btn = document.getElementById("btn" + num);
//   btn.classList.add("!border-l-4", "!border-amber-600");
//   btn.classList.remove("!rounded-xl");
// }

// function removeContent(){
//   let box= document.getElementById("changeArea")
//   if (box.classList.contains("hidden")) {
//     box.classList.remove("hidden")
//   }
//   else{
//     box.innerHTML=""
//   }
// }

// function change(num){
//   removeContent();
//   activate(num);

//   const box = document.getElementById("changeArea")
//   if(num==1){
//     box.innerHTML = 
//         `<div class="flex flex-col justify-center items-center gap-10">
//           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>e-Governance <span class="text-gray-700">@UGC</span></h2>
//           <div class="flex gap-8 w-full text-gray-700 text-center">
//             <div class="w-60 gap-4 flex flex-col items-center  
//               border-2 border-gray-200 pt-4 pb-4 px-3 
//               rounded-2xl shadow-md hover:shadow-xl 
//               hover:-translate-y-1 hover:scale-105 
//               transition-all duration-300 bg-white">
                
//               <img class="w-48 h-16 "
//                   src="https://www.ugc.gov.in/Content/images/eGovernance/7032830_UGC_Equivalence.jpg" />
              
//               <div class="text-center font-bold text-gray-700">
//                 UGC Equivalence Portal
//               </div>
//             </div>

//             <div class="w-60 gap-4 flex flex-col items-center 
//               border-2 border-gray-200 pt-4 pb-4 px-3 
//               rounded-2xl shadow-md hover:shadow-xl 
//               hover:-translate-y-1 hover:scale-105 
//               transition-all duration-300 bg-white">
//               <img class="w-48 h-16" src="https://www.ugc.gov.in/Content/images/eGovernance/PhD_Citation_Portal.jpg">
//               <div class="text-center font-bold text-gray-700">UGC Ph.D. Excellence Citation Portal</div>
//             </div>
//             <div class="w-60 gap-4 flex flex-col items-center 
//               border-2 border-gray-200 pt-4 pb-4 px-3 
//               rounded-2xl shadow-md hover:shadow-xl 
//               hover:-translate-y-1 hover:scale-105 
//               transition-all duration-300 bg-white">
//               <img class="w-48 h-16" src="https://www.ugc.gov.in/Content/images/eGovernance/fhei_logo.png">
//               <div class="text-center font-bold text-gray-700">UGC FHEI</div>
//             </div>
//             <div class="w-60 gap-4 flex flex-col items-center 
//               border-2 border-gray-200 pt-4 pb-4 px-3 
//               rounded-2xl shadow-md hover:shadow-xl 
//               hover:-translate-y-1 hover:scale-105 
//               transition-all duration-300 bg-white">
//               <img class="w-48 h-16" src="https://www.ugc.gov.in/Content/images/eGovernance/mmmc.png">
//               <div class="text-center font-bold text-gray-700">Malviya Mission</div>
//             </div>
//           </div>
//           <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
//             View All
//           </button>
//         </div>`
      
//   }
//   else if(num==2){
//     box.innerHTML=`
//     <div class="flex justify-between items-between flex-wrap gap-4">
//       <div class="flex flex-col flex-wrap w-xl gap-4">
//         <h2 class="!font-bold !text-amber-600">Key <span class="text-gray-700">Initiatives</span></h2>
//         <ul>
//           <div class="flex gap-1 items-center flex-wrap"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Women Leaders: Shaping Academic Excellence for Viksit Bharat @ 2047</li></div>
//           <div class="flex gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Compendium of UGC Regulations 1957-2023</li></div>
//           <div class="flex flex-wrap gap-1"><div class="h-full"><i class="fa fa-xs fa-plus !text-amber-600"></i></div><li>List of Eligible Indian institutions to collaborate as per Regulations on Academic Collaboration between Indian and Foreign HEIs to offer Twinning, Joint Degree and Dual Degree Programmes in 2022 with foreign institutions.</li></div>
//           <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Guidelines on Mulya Pravah 2.0</li></div>
//           <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>National Higher Education Qualifications Framework (NHEQF)</li></div>
//           <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Guidelines for Promotion at HEI</li></div>
//           <div class="flex flex-wrap gap-1"><div class="h-full"><i class="fa fa-xs fa-plus !text-amber-600"></i></div><li>Guidelines for Training/Orientation of Faculty on Indian Knowledge System (IKS)</li></div>
//           <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>National Credit Framework (NCrF)</li></div>
//           <div class="flex flex-wrap gap-1 items-center"><i class="fa fa-xs fa-plus !text-amber-600"></i><li>Fostering Social Responsibility & Community Engagement 2.0</li></div>
//         </ul>
//         <button class="bg-gray-700 text-white !rounded-full py-3 w-xs">
//               View All Initiatives
//         </button>
//       </div>
//         <img src="https://www.ugc.gov.in/Content/images/KeyInitiatives/KeyInitiatives.jpg" class="w-lg">
//     </div>`
//   }
//   else if(num==3){
//     box.innerHTML = 
//         `<div class="flex flex-col justify-center items-center gap-10">
//           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">Corner</span></h2>
          
//           <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-graduation-cap text-2xl"></i>
//                     </div>

//                 </div>
                
//                 <div class="pt-10">Fellowships</div>
//             </div>
//             <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa-solid fa-indian-rupee-sign text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10">Scholarships</div>
//             </div>
//             <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-desktop text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10">Portals / Helplines</div>
                
//             </div>
//           </div>
//           </div>

//           <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
//             View All
//           </button>
//         </div>`
      
//   }
//   else if(num==4){
//     box.innerHTML = 
//         `<div class="flex flex-col justify-center items-center gap-10">
//           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">Corner</span></h2>
          
//           <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-trophy text-2xl"></i>
//                     </div>

//                 </div>
                
//                 <div class="pt-10">UGC Research Awards</div>
//             </div>
//             <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-wheelchair text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10">Portals / Helplines</div>
//             </div>
//             <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='bg-white rounded-b-2xl w-xs h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-stethoscope text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10">Regulations</div>
                
//             </div>
//           </div>
//           </div>

//           <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
//             View All
//           </button>
//         </div>`
      
//   }
//   else if(num==5){
//     box.innerHTML = 
//       `<div class="flex flex-col justify-center items-center gap-10">
//           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">Corner</span></h2>
          
//         <div class='flex flex-wrap justify-center items-center gap-10'>
//             <div class='flex-1 bg-white rounded-b-2xl h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-institution text-2xl"></i>
//                     </div>

//                 </div>
                
//             <div class="pt-10 px-10">Central Universities<br>57</div>
//             </div>
//           <div class='flex-1 bg-white rounded-b-2xl  h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-institution text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10 px-10">State Universities<br>512</div>
//           </div>
//           <div class='flex-1 bg-white rounded-b-2xl h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-building text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10 px-10">Deemed to be Universities<br>147</div>
                
//             </div>
//             <div class='flex-1 bg-white rounded-b-2xl h-60 shadow-lg flex flex-col hover:!bg-[#3D344B] hover:text-white text-lg text-[#3D344B] font-bold text-center'>
//                 <div class=' rounded-tl-2xl rounded-tr-2xl w-full h-24 flex justify-center'>
//                     <div class='bg-[#ff6c3a] text-white rounded-bl-2xl rounded-br-2xl h-fit p-4 font-bold text-lg '>
//                         <i class="fa fa-building text-2xl"></i>
//                     </div>

//                 </div>
//                 <div class="pt-10 px-10">Private Universities<br>540</div>
//             </div>
//         </div>

//           <button class="bg-gray-700 text-white !rounded-full py-3 px-8">
//             View All
//           </button>
//         </div>`
      
//   }
//   else if(num==6){
//     box.innerHTML = 
//       `<div class="flex flex-col justify-center items-center gap-10">
//           <h2 class='text-lg font-bold !text-amber-600 text-center !font-bold'>Student <span class="text-gray-700">UGC Green Initiatives</span></h2>
//           <img src="https://www.ugc.gov.in/Content/images/JPG/GREEN_PAGE_Final.jpg">
        
//         </div>`
//   }
// }
// function MiddleData() {
//   return (
//     <div className="bg-[#3D344B] w-full flex justify-center items-center flex-col py-16 gap-4 h-auto">
//       <div className="flex flex-wrap justify-center items-center gap-3 text-[#5E5964] font-bold w-[90%] md:w-[85%]">

//         <button
//         id="btn1"
//           onClick={() => change(1)}
//           className="middle-btn hover:active selected w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
//                 px-4 py-3 flex flex-col justify-center items-center gap-2 
//                 border-l-4 border-transparent hover:border-amber-600 bg-white 
//                 !rounded-xl shadow-md hover:shadow-xl 
//                 hover:scale-105 transition-all duration-300">
//           <i className="fa fa-laptop text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
//           <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
//             <p className="pb-0 m-0">e-Governance</p>
//             <p>@UGC</p>
//           </div>
//         </button>
      
//         <button
//         id="btn2"
//         onClick={() => change(2)}
//         className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
//         px-4 py-3 flex flex-col justify-center items-center gap-2 
//         border-l-4 border-transparent hover:border-amber-600 
//         bg-white !rounded-xl shadow-md hover:shadow-xl 
//         hover:scale-105 transition-all duration-300">
//           <i className="fa fa-hand text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
//           <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
//             <p className="pb-0 m-0">Key</p>
//             <p>Initiatives</p>
//           </div>
//         </button>

//         <button
//         id="btn3"
//         onClick={() => change(3)}
//         className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
//         px-4 py-3 flex flex-col justify-center items-center gap-2 
//         border-l-4 border-transparent hover:border-amber-600 
//         bg-white !rounded-xl  shadow-md hover:shadow-xl 
//         hover:scale-105 transition-all duration-300">
//           <i className="fa fa-graduation-cap text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
//           <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
//             <p className="pb-0 m-0">Student</p>
//             <p>Corner</p>
//           </div>
//         </button>

//         <button
//         id="btn4"
//         onClick={() => change(4)}
//         className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
//         px-1 py-3 flex flex-col justify-center items-center gap-2 
//         border-l-4 border-transparent hover:border-amber-600 
//         bg-white !rounded-xl  shadow-md hover:shadow-xl 
//         hover:scale-105 transition-all duration-300">
//           <i className="fa fa-users text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
//           <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
//             <p className="pb-0 m-0">Faculty Corner/</p>
//             <p>Non-Teaching Staff</p>
//           </div>
//         </button>

//         <button
//         id="btn5"
//         onClick={() => change(5)}
//         className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
//         px-4 py-3 flex flex-col justify-center items-center gap-2 
//         border-l-4 border-transparent hover:border-amber-600 
//         bg-white !rounded-xl  shadow-md hover:shadow-xl 
//         hover:scale-105 transition-all duration-300">
//           <i className="fa fa-institution text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
//           <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
//             <p className="pb-0 m-0">Details of</p>
//             <p>HEIs</p>
//           </div>
//         </button>

//         <button
//         id="btn6"
//         onClick={() => change(6)}
//         className="middle-btn w-[45%] sm:w-[30%] md:w-[18%] xl:w-[14%] h-32 sm:h-36 md:h-40 
//         px-3 py-3 flex flex-col justify-center items-center gap-2 
//         border-l-4 border-transparent hover:border-amber-600 
//         bg-white  !rounded-xl shadow-md hover:shadow-xl 
//         hover:scale-105 transition-all duration-300">
//           <i className="fa fa-globe text-amber-600 text-2xl sm:text-3xl md:text-4xl"></i>
//           <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-md">
//             <p className="pb-0 m-0">UGC</p>
//             <div className="flex justify-center items-center">
//               <p className="text-center">Green initiatives</p>
//               <img
//                 src="https://www.ugc.gov.in/Content/images/JPG/blink_new.gif"
//                 alt="new"
//                 className="w-3 h-3 sm:w-4 sm:h-4 mb-1 ml-1"
//               />
//             </div>
//           </div>
//         </button>

//       </div>

//       <div id="changeArea" className="hidden flex flex-wrap justify-center items-center w-[80%] bg-[#F1F1F1] h-auto rounded-2xl p-5 ">

//       </div>  
//     </div>
//   );
// }

// export default MiddleData; */}
