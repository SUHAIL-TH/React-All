
import React, { useReducer } from 'react'

const initialtSate={count:0}
function reducer(state,action){
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return initialtSate 
         default :
            throw new Error("somthing went wrong")

    }
}
export const ReducerCom = () => {
    const [state,dispatch]=useReducer(reducer,initialtSate)
  return (  
    <>
    
    <h1>count : {state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}
