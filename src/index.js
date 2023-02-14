import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SignupPage } from './pages/Signup/signup';
import StartPage from './pages/StartPage/start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);