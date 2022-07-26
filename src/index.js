import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Tami from "./tami";
import reportWebVitals from './reportWebVitals';
import Admin from './admin/admin';
import BusinessDatails from './admin/businessDetails';
import Meetings from './admin/meetings';
import Services from './admin/services';

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
      }
    />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
