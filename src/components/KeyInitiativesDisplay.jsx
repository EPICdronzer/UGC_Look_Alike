import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Footer from './Footer'
import data from '../JsonData/KeyInitiativesData.json'

function KeyInitiativesDisplay() {
    const {id}=useParams()
    const [selected,setSelected]=useState(null)
    useEffect(()=>{
        const found=data.find((item)=>item.id==id)
        setSelected(found)

    },[id])
    const idSpan=()=>{
            if(id == 15 && selected?.goals){
               return selected.goals.map((items,index)=>(
                <>
                
                    <div key={index} className='flex gap-2 items-center '><i class="fa fa-check-circle fa-sm text-amber-600"/><span>{items}</span></div>
                
                </>
                
               )) 
            }else if(id==22 && selected?.goals){
                return(
                    <div>
                        <br/>
                        <div className='text-gray-700 font-bold text-3xl'>Features</div><br/>
                    { selected.goals.map((items,index)=>(
                <>
                    
                    <div key={index} className='flex gap-2 items-center '><i class="fa fa-check-circle fa-sm text-amber-600"/><span>{items}</span></div>
                
                </>
                
               )) }</div>)
               
            }
            else return null
        }
  return (
    <>
        <HeaderTop/>
        <HeaderMid/>
        <Header/>
        <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
                Home / {selected ? selected.short : "Loading..."}
            </div>
            <div className="text-5xl mb-2 font-bold">
                {selected ? selected.title : "Loading..."}
            </div>
            <div className='text-xl font-semibold'>
                Key Initiatives of UGC
            </div>
        </div>
        <div className="flex flex-wrap gap-5 py-20 justify-center">
           
            <div className="flex flex-col flex-wrap px-32 gap-10">
                <div className="text-3xl text-amber-600 font-semibold">
                    {selected ? selected.title : "Loading..."}
                </div>
                  
                <div className='flex justify-around gap-4 flex-wrap'>
                    <img className='max-w-2xs shadow-2xl' src={selected?selected.image:"Loading..."}/>
                    <div className=" w-3xl">
                        <div className='text-justify'>{selected?selected.description:""}</div>{idSpan()}
                        <br/><br></br>
                        
                        <span className='font-bold'>{selected?selected.title:"Loading..."} </span>
                        
                        
                        <a 
                            href={selected?selected.website:"Loading..."}
                            className="!text-amber-600 font-bold !no-underline "
                        >
                            View More
                        </a>
                    </div>
                </div>
                

            </div>

    
        </div>
        <Footer/>
    </>
  )
}

export default KeyInitiativesDisplay