import React, {createContext,useContext} from 'react';
import { JsxEmit } from 'typescript';

export const Store =  createContext();
function reducer(){}

export const storeProvide = (props:any) =>{
    return <Store.Provider value={'text'}>{props.children}</Store.Provider>
        
}