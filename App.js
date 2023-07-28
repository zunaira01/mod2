import React from 'react';
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./pages/profilepage";
import { Route, Routes } from 'react-router-dom';
import './index';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registerform" element={<Register/>}/>
        <Route path="/profilepage" element={<Profile/>}/>
      </Routes>
    </div>
  );
};
export default App;



