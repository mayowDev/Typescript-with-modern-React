import React, {createContext,useContext} from 'react';

interface iState{
    episodes:[],
    favourites:[]
}
const initialState : iState={
    episodes:[],
    favourites:[]
}
export const Store =  createContext<iState>(initialState);
function reducer(){}

export function Provider(props:any):JSX.Element{
    return <Store.Provider value={initialState}>{props.children}</Store.Provider>
        
}