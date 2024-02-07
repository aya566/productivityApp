
import './App.css';
import Navbar from './component/navbar';
import {  Routes, Route } from "react-router-dom";


import InputComponent from './component/input';


import Home from './component/home';
import Calender from './component/calender';
import Menu from './component/todo';
import Month from './component/monthly';
import Weekly from './component/weekly';
function App() {
  
  

  
  return (
    <div className="App">
      <Navbar></Navbar>
    
     <Routes>
     <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/todo" element={<Menu />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Month />} />
          <Route path="/input" element={<InputComponent />} />
      </Routes>    
      

      
      
      
    </div>
  );
}

export default App;
