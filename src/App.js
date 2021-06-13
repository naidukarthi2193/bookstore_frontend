import './App.css';
import React,{ Component } from 'react'
import Navbar from './Components/Navbar/Navbar.js';
import Search from './Components/Search/Search.js';
import AllBooks from './Components/AllBooks/AllBooks.js';
import PurchaseModal from './Components/PurchaseModal/PurchaseModal'

class App extends Component{

  state={
    isLoggedIn:false,
    showPurchaseHistoryModal:false,
    books:[0,0,0,0,0,0]
  }

  togglePurchaseModal=()=>{
    this.setState({
        showPurchaseHistoryModal:!this.state.showPurchaseHistoryModal
    })

}

  render(){
    return(
      <div className="app">
      <Navbar togglePurchaseModal={this.togglePurchaseModal}  isLoggedIn={this.state.isLoggedIn}/>
      <Search/>
      <h3>ALL BOOKS</h3> 
      <AllBooks/>
      {this.state.showPurchaseHistoryModal?
      <PurchaseModal books={this.state.books} togglePurchaseModal={this.togglePurchaseModal}/>
      :null}
      
    </div>
    )
  }

}

export default App;
