import React, { useState } from 'react'
import Header from './Header'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'
import Footer from './Footer'
import data from "../JsonData/StudentCornerData.json"
function StudentCorner() {
    const [selected,setSelected]=useState(1)
    const renderState=()=>{
        return data.map((items)=>{
            if(items.id==selected){
                return(
                    <>
                        <div className='font-bold text-amber-600 text-3xl'>{items.title}</div>
                        <div>
                            <table>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>{items.title}</th>
                                </tr>
                            </table>
                        </div>
                    </>
                )
            }
            else return null
        })
    }
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
        <div className='w-full flex flex-wrap gap-5 px-30 py-20 justify-center'>
            <div className="flex flex-col gap-2 max-w-xl rounded-2xl text-center ">
                <button onClick={()=>setSelected(1)} className={`w-full p-4 py-3 !rounded-sm transition
                ${selected === 1
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-black hover:bg-amber-600 hover:!text-white"
                }`}>Fellowships</button>
                <button onClick={()=>setSelected(2)} className={`w-full p-4 py-3 !rounded-sm transition
                ${selected === 2
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-black hover:bg-amber-600 hover:!text-white"
                }`}>Scholarships</button>
                <button onClick={()=>setSelected(3)} className={`w-full p-4 py-3 !rounded-sm transition
                ${selected === 3
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-black hover:bg-amber-600 hover:!text-white"
                }`}>Portals/ Helplines for Students</button>
            </div> 
            <div className='min-w-3xl shadow-2xl rounded-2xl flex flex-col items-center gap-4'>
                {renderState()}
            </div>   
        </div>
    <Footer/>
    </>
  )
}

export default StudentCorner