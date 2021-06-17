import {BrowserRouter,Route,Switch} from 'react-router-dom'

import HomePage from './components/mainPage/mainPage'
import Header from './components/Header/header'
import {AuthContext} from './components/context/Auth-Context'

import './App.css'
import { useState } from 'react'
import AllBooks from './components/AllBooks/AllBooks'
import Search from './components/Search/Search'

const NotFoundPage=()=>{
  return(
    <div>404</div>
  )
}


const MyBooks=()=>{
  return(
    <div>My Books</div>
  )
}

function App() {

  const[isLogedin,setLogin]=useState(false)

  const Login=()=>{
    setLogin(true)
  }

  const Logout=()=>{
    setLogin(false)
  }


  let route

  if(isLogedin){
    route=(
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/AllBooks" component={AllBooks}/>
        <Route path ="/MyBooks" component={MyBooks}/>
        <Route component={NotFoundPage}/>
    </Switch>
    )
  }
  else{
    route=(
      <Switch>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/AllBooks" component={AllBooks}/>
      <Route component={NotFoundPage}/>
    </Switch>
    )
  }


  return (
    <AuthContext.Provider
      value={{isLogedin:isLogedin , Login:Login , Logout:Logout}}
    >
    <BrowserRouter>
    <div className="wrap-header">
      <Header/>
    </div>
      <Search/>
      {route}
    </BrowserRouter>
    </AuthContext.Provider>
   
  );
}

export default App;
