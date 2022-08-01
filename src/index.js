import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import './index.css';
import Login from './components/login';
import Customer from "./components/customer";
// import reportWebVitals from './reportWebVitals';
import Admin from './components/admin/admin';
import BusinessDetails from './components/admin/businessDetails';
import Meetings from './components/admin/meetings';

import Services from './components/admin/services';
import ScheduleMeeting from './components/scheduleMeeting';
// import AllBusiness from './components/allBusiness';
import App from './App';
import Tami from './tami';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tami" element={<Tami />} />
      <Route path="admin" element={<Admin />} />
      <Route path="businessDetails" element={<businessDetails />} />
      <Route path="meetings" element={<Meetings />} />
      <Route path="services" element={<Services />} />
      {/* <Route path="allBusiness" element={<AllBusiness />} /> */}
    
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }/>
      <Route path="/login" element={<Login />} />
      <Route path="customer" element={<Customer />} />
      <Route path="scheduleMeeting" element={<ScheduleMeeting />} />
      </Routes>
  </BrowserRouter>
);

// reportWebVitals();
