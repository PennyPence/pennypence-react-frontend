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
import ArticlePage from './pages/Article/article';
import ArticleDetailPage from './pages/ArticleDetail/articledetail';
import QuestionPage from './pages/Question/question';
import QuestionDetailPage from './pages/QuestionDetail/questiondetail';
import MakeStar from './hoc/makestar/makestar';
import NavBar from './components/navbar';
import user from './store/userSlice';
import StoveList from './pages/Stove/stove';
import StoveDetail from './pages/StoveDetail/stovedetail';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(rgba(28, 112, 185, 1), rgba(41, 37, 114, 1))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  }
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      config.headers.Authorization = token;
      config.data = {
        ...config.data,
        user: user // 디폴트 값 설정
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios.defaults.headers.common['Authorization'] = localStorage.getItem("Authorization") 
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <div style={styles.container}>
            <MakeStar />
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
              <Route path="article" element={<ArticlePage />} />
              <Route path="article/:id" element={<ArticleDetailPage />} />
              <Route path="question" element={<QuestionPage />} />
              <Route path="question/:id" element={<QuestionDetailPage />} />
              <Route path="stove" element={<StoveList />} />
              <Route path="stovedetail" element={<StoveDetail />} />
            </Routes>
            <NavBar />
          </div>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);