import React from 'react';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateHotel from './pages/admin/createRoom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />

          <Route path = "/createRoom" element = {<CreateHotel/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App