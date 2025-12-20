import React, { useState } from 'react'
import Header from './Header'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'
import Footer from './Footer'
import data from "../JsonData/StudentCornerData.json"
import { NavLink } from 'react-router-dom'
function StudentCorner() {
    const [selected,setSelected]=useState(1)
    const renderState=()=>{
        return data.map((items)=>{
            if(items.id==selected){
                return(
                    <>
                        <div className='font-bold text-amber-600 text-3xl'>{items.title}</div>
                        <div>
                            <table className='w-12 mb-10'>
                                <tr className='bg-amber-600 text-white'>
                                    <th><div className='w-24 p-3'>Sr.No.</div></th>
                                    <th><div className='w-xl py-3 pl-3'>{items.title}</div></th>
                                </tr>
                                {
                                    items.list.map((data1)=>(
                                        <tr>
                                            <td><div className='w-24 p-3'>{data1.id}</div></td>
                                            <td className='flex justify-around items-center pr-2'><div className='w-xl py-3 pl-3'>{data1.name}</div>
                                            {linking(data1)}
                                            </td>
                                       </tr>
                                    )) 
                                }
                            </table>
                        </div>
                    </>
                )
            }
            else return null
        })
    }
    function linking(data1){
        if(selected==1 || selected==2){
            return(
                <NavLink className='!no-underline text-black' to={`/${data1.view}/${data1.id}`}>View</NavLink>
            )
        }
        else if(selected==3){
            const allowed = [1,2,3,5,6,7,8,9,10,12,16,19]
            if(allowed.includes(data1.id)){
                return(
                    <a className='!no-underline text-black' href={data1.view}>View</a>
                )
            }
            else{
                return(
                <NavLink className='!no-underline text-black' to={`/${data1.view}`}>View</NavLink>
            )  }
        }
    }
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
        <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / Student Corner
            </div>
            <div className="text-5xl mb-2 font-semibold">
            Student Corner
            </div>
        </div>
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