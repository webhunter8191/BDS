import React from 'react';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Rooms from './pages/Rooms';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App