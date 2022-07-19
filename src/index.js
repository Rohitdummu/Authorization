import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './components/main'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Upwd from './components/updatepassword';
import Nav from './components/navbar'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/main/:email" element={<Main/>}/>
    <Route path="/updatepassword" element={<Upwd/>}/>
    </Routes>
  </BrowserRouter>
);

