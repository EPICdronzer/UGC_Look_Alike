import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Footer from './Footer'
import data from '../JsonData/FellowshipData.json'
import { useParams } from 'react-router-dom'
function FellowshipDisplay() {
  const {id}=useParams()
  const dis=data.find((items)=>items.id==id)
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
    <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
            <div className='text-amber-600'>
            Home / {dis.schemeName}
            </div>
            <div className="text-5xl mb-2 font-semibold">
            {dis.schemeName}
            </div>
    </div>
    <div className="w-full flex flex-col p-4 md:!p-24">
      <div className="flex shadow-2xl p-5 rounded-4xl flex-col gap-6">

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Name of the Scheme:
          </span>
          <p className="max-w-4xl">
            {dis.schemeName}
          </p>
        </div>

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Objective of Scheme:
          </span>
          <p className="max-w-4xl">
            {dis.objective.map((items)=>(<div><i className='fa fa-arrow-circle-right text-amber-600'/>{items}<br/></div>))}
          </p>
        </div>

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Eligibility:
          </span>
          <p className="max-w-4xl">
            {dis.eligibility}
          </p>
        </div>

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Slots:
          </span>
          <p className="max-w-4xl">
            {dis.slots}
          </p>
        </div>

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Tenure:
          </span>
          <p className="max-w-4xl">
            {dis.tenure}
          </p>
        </div>

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Financial Assistance:
          </span>
          <p className="max-w-4xl">
            {dis.financialAssistance.map((items)=>(<div><i className='fa fa-arrow-circle-right text-amber-600'/>{items.topic}<br/>{items.salary.map((sal)=>(<div>{sal}<br/></div>))}
            <br/></div>))}
          </p>
        </div>

        <div className="text-lg flex flex-col md:flex-row md:gap-32 gap-2">
          <span className="font-semibold md:w-64">
            Remark:
          </span>
          <p className="max-w-4xl">
            {dis.remark}
          </p>
        </div>

      </div>
    </div>

    <Footer/>
    </>
  )
}

export default FellowshipDisplay