import React from 'react'
import Header from '../Header'
import HeaderTop from '../HeaderTop'
import HeaderMid from '../HeaderMid'
import Footer from '../Footer'
import { Suspense } from 'react'
const AddForm=React.lazy(()=>import('./AddForm'))
function AddUni() {
  return (
    <>
    <HeaderTop/>
    <HeaderMid/>
    <Header/>
    <Suspense fallback="Form Loading...">
        <AddForm/>
    </Suspense>
    <Footer/>
    </>
  )
}

export default AddUni