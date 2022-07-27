import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import './index.css';
import Login from './components/login';
import Customer from "./components/customer";
// import reportWebVitals from './reportWebVitals';
import Admin from './admin/admin';
import BusinessDatails from './admin/businessDetails';
import Meetings from './admin/meetings';
import Services from './admin/services';
import App from './App';
import Tami from './tami';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tami" element={<Tami />} />
      <Route path="admin" element={<Admin />} />
      <Route path="businessDatails" element={<BusinessDatails />} />
      <Route path="meetings" element={<Meetings />} />
      <Route path="services" element={<Services />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }/>
      <Route path="/login" element={<Login />} />
      <Route path="customer" element={<Customer />} />
      </Routes>
  </BrowserRouter>
);

// reportWebVitals();
