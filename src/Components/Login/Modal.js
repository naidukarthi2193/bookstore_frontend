import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group'

import {useForms} from "../shared/hooks/form-hook"
import Backdrop from '../shared/backDrop'
import './modal.css'
import Input from '../shared/Input/input'
import Button from '../shared/Button'
import {VALIDATOR_ISSTRING,VALIDATOR_MINLEN,VALIDATOR_REQUIRE,VALIDATOR_ISEMAIL} from '../shared/util/validate'
import { AuthContext } from '../context/Auth-Context';


const ModalOverlay =(props)=>{

       const[FormState,inputHandler,setFormData] =useForms({
           Email:{
                value:"",
                isValid:false
            },
            password:{
                value:"",
                isValid:false
            }
        },false)

        const auth=useContext(AuthContext)

        const [isLoginMode,setLoginMode]=useState(true)

        const onSwitch=()=>{
            if(!isLoginMode){
                setFormData({
                    ...FormState.Inputs,
                    Name:undefined
                },
                FormState.Inputs.Email.isValid && FormState.Inputs.password.isValid
                )
            }
            else{
                setFormData({
                    ...FormState.Inputs,
                    Name:{
                        value:"",
                        isValid:false
                    }
                },
                false)
            }


            setLoginMode(prevMode=>!prevMode)
        }
         const content=(
            <div className={'modal'}>

            <div className="std-label"><label>{isLoginMode ? "LOG IN" : "SIGN Up"}</label></div>
            <form  className ="std-Input" onSubmit={(e)=>{
                e.preventDefault()
                props.onCancel()
                auth.Login()
                {isLoginMode?console.log("Logged in"): console.log("Signed in")}
            }}>
                {!isLoginMode &&                
                    <Input type={"text"} 
                    id={"Name"}
                    element={"input"}
                    placeholder={"name"} 
                    errorText={"Invalid User ID"} 
                    label={"Name"} 
                    validator={[VALIDATOR_REQUIRE(),VALIDATOR_MINLEN(5),VALIDATOR_ISSTRING()]}
                    onInput={inputHandler}
                    />
                }

                <Input type={"email"} 
                    id={"Email"}
                    element={"input"}
                    placeholder={"abc@xyz.com"} 
                    errorText={"Invalid Email ID"} 
                    label={"Email"} 
                    validator={[VALIDATOR_REQUIRE(),VALIDATOR_MINLEN(5),VALIDATOR_ISSTRING(),VALIDATOR_ISEMAIL()]}
                    onInput={inputHandler}
                    />
                <Input type={"password"} 
                    id={"password"}
                    element={"input"} 
                    placeholder="Password" 
                    errorText={"Invalid Password"} 
                    label={"Password"} 
                    validator={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    />
                <div className="btn"><Button type="submit" disabled={!FormState.Valdity}>{isLoginMode ? "LOG IN" : "SIGN Up"}</Button>
                </div>
                {console.log(FormState)}

            </form>
            <div className="btn">
            <Button inverse onClick={onSwitch}>
                SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
            </div>
        </div>

    )

    return ReactDOM.createPortal(content,document.getElementById('Login-hook'))

}


const Modal=(props)=>{
    return(
        <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel}/>}
        <CSSTransition 
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal">
          <ModalOverlay {...props} />
        </CSSTransition>
        </React.Fragment>
    )

}

export default Modal