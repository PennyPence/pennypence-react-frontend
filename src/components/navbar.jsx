import React from "react";
import style from './navbar.module.css'
import User from '../assets/images/user.png'
import Home from '../assets/images/home.png'
import Ranking from '../assets/images/ranking.png'
import News from '../assets/images/news.png'
import Mission from '../assets/images/mission.png'


// <a href="https://www.flaticon.com/kr/free-icons/-" title="홈 버튼 아이콘">홈 버튼 아이콘  제작자: Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="뉴스 아이콘">뉴스 아이콘  제작자: Payungkead - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="순위 아이콘">순위 아이콘  제작자: Vector Stall - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/-" title="할 일 목록 아이콘">할 일 목록 아이콘  제작자: Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/kr/free-icons/" title="커뮤니티 아이콘">커뮤니티 아이콘  제작자: KP Arts - Flaticon</a>
function NavBar() {
    return (
        <section className={style[`navbar`]}>
            <div className={style[`navbar__navbar-form`]}>
                <img style={style[`navbar__navbar-form__images`]} src={Home} alt="home" />
                <img style={style[`navbar__navbar-form__images`]} src={News} alt="news" />
                <img style={style[`navbar__navbar-form__images`]} src={User} alt="user" />
                <img style={style[`navbar__navbar-form__images`]} src={Mission} alt="mission" />
                <img style={style[`navbar__navbar-form__images`]} src={Ranking} alt="ranking" />
            </div>
        </section>
    );
}

export default NavBar;