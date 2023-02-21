import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameStart from './pages/GameStart/gamestart';
import { SignupPage } from './pages/Signup/signup';
import StartPage from './pages/StartPage/start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicInfo from './pages/BasicInfo/basicinfo';
import InitNews from './pages/NewsInit/newsinit';
import NewsDetailPage from './pages/NewsDetail/newsdetail';
import NewsTab from './pages/NewsTab/newstab';
import InvestPage from './pages/InvestPage/investpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="start" element={<GameStart />} />
        <Route path="basic" element={<BasicInfo />} />
        <Route path="news" element={<InitNews />} />
        <Route path="newsdetail" element={<NewsDetailPage />} />
        <Route path="newstab" element={<NewsTab />} />
        <Route path="investpage" element={<InvestPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);