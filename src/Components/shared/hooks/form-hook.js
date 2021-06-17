import { useCallback, useReducer } from "react"


const formReducer=(state,action)=>{
    switch(action.type){
        case"INPUT_CHANGED":{
            let formValidity=true
            for(const inputid in state.Inputs){
                if(state.Inputs[inputid]===undefined){
                    continue;
                }
                if(inputid===action.Inputid){
                    formValidity=formValidity && action.valid

                }
                else{
                    formValidity=formValidity && state.Inputs[inputid].isValid
                }
            }
            return{
                ...state,
                Inputs: {
                    ...state.Inputs,
                    [action.Inputid]:{
                        value:action.value,
                        isValid:action.valid
                    }
                },
                Valdity:formValidity
            }
        }

        case 'SET_DATA':{
            return{
                Inputs:action.value,
                Valdity:action.valid
            }
        }

        default: return state
    }

}


export const useForms=(InitialState,InitialValidity)=>{
    const [FormState,dispatch]=useReducer(formReducer,{
        Inputs:InitialState,
        Valdity:InitialValidity
    })

    const inputHandler=useCallback((id,value,isvalid)=>{
        console.log("Called")
        console.log(id,isvalid,value)
        dispatch({
            type:"INPUT_CHANGED",
            valid:isvalid,
            Inputid:id,
            value:value
        })
    },[])

    const setFormData=useCallback((Initialstate,InitialValidity)=>{
        dispatch({
            type:"SET_DATA",
            value:Initialstate,
            valid:InitialValidity
        })

    },[])

    return [FormState,inputHandler,setFormData];
};
