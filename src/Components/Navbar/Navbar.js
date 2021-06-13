import React from 'react';
import { Component } from 'react';

import './Navbar.css'
class NavBar extends Component{

    state={
        showPurchaseHistoryModal:false
    }



    render(){
        return(
            <div className='navbar'>
            <h2>Book Store</h2>
            <div className="buttons">
            <button onClick={()=>{
                this.props.togglePurchaseModal()
            }}
            >Purchase History</button>
            <button>Login</button>
            </div>
            
        </div>
        )
    }
}

 

export default NavBar
