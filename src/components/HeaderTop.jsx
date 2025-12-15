import { NavLink } from "react-router-dom"


function HeaderTop() {
  return (
    <div className="bg-[#3D344B] text-center text-white font-normal ">
      <ul className="font-sans flex flex-wrap gap-2 justify-center items-center py-1 m-0">
        
        <li className="text-xs flex items-center justify-center">
          <NavLink to="/"><i className="bi bi-house-fill text-xs border-r border-white pr-4 text-[#ff6c3a]"></i></NavLink>  
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center gap-2">
          <i className="bi bi-arrow-down text-xs"></i>
          Skip to main content
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center gap-2">
          <i className="bi bi-arrow-down text-xs"></i>
          Skip to Navigation
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center gap-2">
          <i className="bi bi-volume-up text-sm"></i>
          Screen Reader
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center gap-2">
          
          Text Size: A- A A+ Hindi
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center">
          Contact Us
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center">
          FAQs
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center">
          e-Procurement
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center">
          Tenders
        </li>

        <li className="text-xs border-r border-white pr-2 flex items-center justify-center">
          Jobs
        </li>

        <li className="flex items-center justify-center">
          <i className="bi bi-search text-xs border-r border-white pr-2 "></i>
        </li>

      </ul>
    </div>
  )
}

export default HeaderTop