// import logo from './logo.svg';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import './App.css';
import ShelterForm from './Pages/ShelterForm';
import UserForm from './Pages/UserForm';

import {AuthContextProvider} from './Context/AuthContext';

function App() {
  return (
    <div className='App'>
    <AuthContextProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/account' element={<Account/>} />
      <Route path='/shelterForm' element={<ShelterForm/>} />
      <Route path='/UserForm' element={<UserForm/>} />
 
    
    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
