import React from "react";
import style from './navbar.module.css'
import User from '../assets/images/user.png'
import Home from '../assets/images/home.png'
import Ranking from '../assets/images/ranking.png'
import News from '../assets/images/news.png'
import Mission from '../assets/images/mission.png'
import { useState } from "react";

// <a href="https://www.flaticon.com/kr/free-icons/-" title="홈 버튼 아이콘">홈 버튼 아이콘  제작자: Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="뉴스 아이콘">뉴스 아이콘  제작자: Payungkead - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="순위 아이콘">순위 아이콘  제작자: Vector Stall - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/-" title="할 일 목록 아이콘">할 일 목록 아이콘  제작자: Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="커뮤니티 아이콘">커뮤니티 아이콘  제작자: KP Arts - Flaticon</a>
function NavBar() {
    const [isContain, setisContain] = useState("0");
    function onClickhandle(e) {
        setisContain(e.target.id);
    }
    return (
        <section className={style[`navbar`]}>
            <div className={style[`navbar__navbar-form`]}>
                <li className={style[`${ isContain === "0" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="0" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__active`] } src={Home} id="0" alt="home" />
                </li>
                <li className={style[`${ isContain === "1" ? "navbar__navbar-form__active" : "navbar__navbar-form__iconbox"}`]} id="1" onClick={onClickhandle}>
                    <img className={style[`navbar__navbar-form__iconbox__images`]} src={News} id="1" alt="news" />
                </li>
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