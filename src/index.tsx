import React, {Fragment,useState} from 'react'
import ReactDom from 'react-dom';
import {Provider} from './Store'
import App from './App'

ReactDom.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root')
)