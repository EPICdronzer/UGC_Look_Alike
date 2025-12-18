import React, { useEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import data from '../JsonData/InterUniCenter.json'
import InterUniContent from './InterUniContent'

function DisplayInterUni() {
    const {id}=useParams()
    const [selected,setSelected]=useState(null)
    useEffect(()=>{
      const found = data.find((items)=>items.id==id)
      setSelected(found)
    },[id])

    // const[data,setData]=useState("hidden")
    // useEffect(()=>{
    //   if(id=='4'){
    //     setData("block")}
    //   // else if(id==6){

    //   // }
    // },[id])
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
                {selected ? selected.short : "Loading..."}
            </div>
            <div className='text-xl font-semibold'>
                University Grants Commission
            </div>
        </div>
        <div className="flex flex-wrap gap-5 py-20 justify-center">
           
            <div className="flex flex-col flex-wrap max-w-4xl gap-4">
                <div className="max-w-3xl text-3xl text-amber-600 font-semibold">
                    {selected ? selected.name : "Loading..."}
                </div>

                <div className="flex flex-wrap max-w-4xl items-start justify-between gap-2">
                    <img className='max-w-45 border-2 border-gray-300' src={selected ? selected.image : "Loading..."}/>
                    <div className='max-w-lg text-justify mb-2.5'>{selected?selected.description:"Loading..."}</div>
                </div>
                <div className={id === "4" ? "block" : "hidden"}>
                <div className="flex flex-wrap gap-4 justify-center">
                  {selected?.education_media_research_centres?.map((items, index) => (
                    <div key={index} className="w-64 text-sm font-semibold border-r-2 border-gray-300">
                      <i class='fa fa-building'/>Educational Media Research Centre<br/><i class='fa fa-map-marker'/>{items}
                    </div>
                  ))}
                </div>
                </div>
                <div className={id === "7" ? "block" : "hidden"}>
                <div className="w-full flex flex-wrap">
                  <div>
                    <span className='font-bold'>Vision: </span><span>{selected?.vision}</span>
                  </div>
                  <div>
                    <span className='font-bold'>Mission: </span><span>{selected?.mission}</span>
                  </div>
                  <br/>
                  <div>
                    <div className='font-bold mb-3'>Goals:</div>
                    <div>
                      {selected?.goals?.map((items, index) => (
                        
                        <div key={index} className="flex items-start gap-2 leading-tight">
                          <i className="fa fa-caret-right leading-none mt-[2px]" />
                          <div className="leading-tight">{items}</div>
                        </div>

                      ))}
                    </div>
                  </div>
                  
                  
                </div>
                </div>
                <div className="font-bold text-end">
                  <a
                    href={selected?selected.website:"Loading..."}
                    className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold 
                              px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 !no-underline"
                  >
                    More Info
                  </a>
                </div>

            </div>
            <div className='border-t-8 border-amber-600 p-6'>
                <InterUniContent/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default DisplayInterUni