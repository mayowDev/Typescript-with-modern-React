import React,{useContext, Fragment} from 'react'
import {Store} from './Store'

const App = () => {
    const store= useContext(Store)
    return (
        <div id="root">
            my app here
        </div> 
    )
}


export default  App;