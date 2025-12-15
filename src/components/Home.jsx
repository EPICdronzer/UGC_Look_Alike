import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMid from './HeaderMid'
import Header from './Header'
import Cour from './Cour'
import Marq from './Marq'
import MiddleData from './MiddleData'
import MiddleDownData from './MiddleDownData'
import Footer from './Footer'

function Home() {
  return (
    <>
        <HeaderTop/>
        <HeaderMid/>
        <Header/>
        <Cour/>
        <Marq/>
        <MiddleData/>
        <MiddleDownData/>
        <Footer/>
    </>
  )
}

export default Home