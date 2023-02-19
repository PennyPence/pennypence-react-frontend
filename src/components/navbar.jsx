import React from "react";
import style from './navbar.module.css'
import User from '../assets/images/user.png'
import Home from '../assets/images/home.png'
import Ranking from '../assets/images/ranking.png'
import News from '../assets/images/news.png'
import Mission from '../assets/images/mission.png'
import { useState } from "react";
import { Link } from "react-router-dom";

// <a href="https://www.flaticon.com/kr/free-icons/-" title="홈 버튼 아이콘">홈 버튼 아이콘  제작자: Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="뉴스 아이콘">뉴스 아이콘  제작자: Payungkead - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="순위 아이콘">순위 아이콘  제작자: Vector Stall - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/-" title="할 일 목록 아이콘">할 일 목록 아이콘  제작자: Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="커뮤니티 아이콘">커뮤니티 아이콘  제작자: KP Arts - Flaticon</a>
function NavBar({basicPos}) {
    const [isContain, setisContain] = useState(basicPos ? 
        // 위치가 home 이면 0 이활성화
        basicPos==="home" ? "0" :
        // 위치가 news 면 1이 활성화
        basicPos==="news" ? "1" :
        // 위치가 커뮤니티 면 2가 활성화
        basicPos==="community" ? "2" :
        // 위치가 미션이면 3이 활성화
        basicPos==="mission" ? "3" :
        // 위치가 랭킹이면 4가 활성화
        basicPos==="ranking" ? "4" : ""
        : "");
    console.log(basicPos);
    function onClickhandle(e) {
        setisContain(e.target.id);
    }
    return (
        <section className={style[`navbar`]}>
            <div className={style[`navbar__navbar-form`]}>
                <li className={style[`${ isContain === "0" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="0" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__active`] } src={Home} id="0" alt="home" />
                </li>
                <Link to="/news">
                <li className={style[`${ isContain === "1" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="1" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__images`]} src={News} id="1" alt="news" />
                </li>
                </Link>
                <li className={style[`${ isContain === "2" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="2" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__images`]} src={User} id="2" alt="user" />
                </li>
                <li className={style[`${ isContain === "3" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="3" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__images`]} src={Mission} id="3" alt="mission" />
                </li>
                <li className={style[`${ isContain === "4" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="4" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__images`]} src={Ranking} id="4" alt="ranking" />
                </li>
            </div>
        </section>
    );
}

export default NavBar;