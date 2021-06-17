import { useReducer,useEffect } from "react"

import {validate} from '../util/validate'

import './input.css'

const InputReducer=(state,action)=>{
    switch(action.type){

        case 'CHANGED':
            return{
                ...state,
                value:action.value,
                isvalid:validate(action.value,action.validator)
            }
        case 'TOUCH': 
            return {
                 ...state,
                isTouched: true
            }
        default:
            return state
    
    }

}


const Input=(props)=>{

    const[inputState,dispatch]=useReducer(InputReducer,{
        value:'',
        isvalid:false,
        isTouched:false
    })

    const OnstateChanged=(e)=>{
        dispatch({
            type:"CHANGED",
            value:e.target.value,
            validator:props.validator

        })
    }
    const touchHandler = () => {
        dispatch({
          type: 'TOUCH'
        });
      };

    const {onInput,id}=props
    const{value,isvalid}=inputState

    useEffect(()=>{onInput(id,value,isvalid)},[value,isvalid,id,onInput])

    const element= props.element === 'input'?
    <input 
     type={props.type}
     id={props.id}
     placeholder={props.placeholder}
     value={inputState.value}
     onBlur={touchHandler}
     onChange={OnstateChanged}
     />
     
     :
     <textarea
     id={props.id}
     placeholder={props.placeholder}
     value={inputState.value}
     onBlur={touchHandler}
     onChange={OnstateChanged}
     />
     


    return(
        <div
            className={`form-control ${!inputState.isvalid && inputState.isTouched &&
          'form-control--invalid'}`}
        >
            <label htmlFor={props.id}> {props.label} </label>
            {element}
            {!inputState.isvalid && inputState.isTouched &&<p>{props.errorText}</p>}

        </div>
    )


}

export default Input