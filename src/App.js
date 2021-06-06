import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Search from './Components/Search/Search.js';
import AllBooks from './Components/AllBooks/AllBooks.js';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Search/>
      <h3>ALL BOOKS</h3> 
      <AllBooks/>
      
    </div>
  );
}

export default App;
