
import './App.css';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';
import Home from "./Pages/Home";
import Book from './Pages/Book';
import Sidebar from './Components/SideBar/Sidebar';
import Navbar from './Components/Nabar/Navbar';
import Teams from './Pages/Teams';
import Chat from './Pages/Chat';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/user' element={<User></User>}></Route>
          <Route path='/book' element={<Book/>}></Route>
          <Route path='/team' element={<Teams/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          
        </Routes>
      </Sidebar>
    
    </div>
  );
}

export default App;
