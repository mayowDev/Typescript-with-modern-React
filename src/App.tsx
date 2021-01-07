import React,{useContext, Fragment} from 'react'
import {Store} from './Store'

const App = () => {
    const store= useContext(Store)
    console.log({store})
    return (
        <Fragment >
            my app 
           
        </Fragment> 
    )
}


export default  App;