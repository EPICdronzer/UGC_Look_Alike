import React from 'react'

import {configureStore} from "react-redux"
import CounterSlice from "./CounterSlice"

const Store=configureStore({
    reducer:{
        counter:CounterSlice
    }
})

export default Store