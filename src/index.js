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
import KaKaoAuth from './pages/Signup/kakao';
import RankingPage from './pages/Ranking/ranking';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
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
          <Route path="oauth/kakao/callback/" element={<KaKaoAuth />} />
          <Route path="ranking" element={<RankingPage />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);