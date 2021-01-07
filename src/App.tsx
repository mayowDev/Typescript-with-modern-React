import React,{useContext, Fragment} from 'react'
import {Store} from './Store'

const App = () => {
    const store= useContext(Store)
    return (
        <Fragment >
            {console.log(store)}
            <div id="root">
                my app here
            </div> 
        </Fragment>
    )
}


export default  App;