import React, { useContext } from 'react'
import {useState} from 'react'
import{NavLink} from 'react-router-dom'
import { AuthContext } from '../context/Auth-Context'
import Modal from '../Login/Modal'
import "./header.css"

const Header= ()=>{

    const auth= useContext(AuthContext)
    const [isClicked,SetisClicked] = useState(false)
    

    const onShow=()=>{
        SetisClicked(true)
    }

    const OnHide=()=>{
        SetisClicked(false)
    }



    return(
        <div>

            <Modal show={isClicked} onCancel={OnHide}/> 

            <div className="Main-header">
            <h1>BookStore</h1>
            <div className='nav-links'>
                
                <li>
                    <NavLink to="/" exact={true}>Home</NavLink>
                </li>
                {auth.isLogedin && 
                    <li>
                    <NavLink to ="/MyBooks">My Books</NavLink>
                    </li>
                }
                <li>
                    <NavLink to ="/AllBooks">All Books</NavLink>
                </li>
                <li>
                   {!auth.isLogedin ? <button onClick={onShow}> Authenticate </button> :<button onClick={auth.Logout}> Logout </button> }
                </li>
            </div>
            </div>
        </div>

    )
}

export default Header