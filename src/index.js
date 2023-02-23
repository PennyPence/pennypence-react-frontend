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
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CommunityPage from './pages/Community/community';
import CommunityDetailPage from './pages/CommunityDetail/communitydetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
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
            <Route path="community" element={<CommunityPage />} />
            <Route path="communitydetail" element={<CommunityDetailPage />} />
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);