import style from "./stove.module.css"
import Twice from "../../assets/images/twice.png"
import Avoid from "../../assets/images/avoid.png"
import Back from "../../assets/images/back.png"
import Popular from "../../assets/images/popular.png"
import Reset from "../../assets/images/reset.png"
import Hint from "../../assets/images/hint.png"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"

// <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: Freepik - Flaticon</a> 힌트 아이콘주소
// <a href="https://www.flaticon.com/free-icons/reset" title="reset icons">Reset icons created by Freepik - Flaticon</a> 리셋 아이콘주소
// <a href="https://www.flaticon.com/kr/free-icons/2" title="2 아이콘">2 아이콘  제작자: Freepik - Flaticon</a> 2배 아이콘
// <a href="https://www.flaticon.com/kr/free-icons/-" title="인기 있는 아이콘">인기 있는 아이콘  제작자: Freepik - Flaticon</a> 인기 아이콘 주소
// <a href="https://www.flaticon.com/kr/free-icons/" title="검 아이콘">검 아이콘  제작자: Freepik - Flaticon</a> 방패아이콘
// <a href="https://www.flaticon.com/kr/free-icons/" title="시각 아이콘">시각 아이콘  제작자: Freepik - Flaticon</a> 시간


function StoveList() {
    return (
        <section className={style[`stove-page`]}>
            <MakeStar />
            <main className={style[`stove-page__frame`]}>
                <div className={style[`stove-page__frame__item`]}>
                    <img src={Hint} alt="" className={style[`stove-page__frame__item__image`]} />
                    <span className={style[`stove-page__frame__item__text`]}>힌트</span>
                    <button className={style[`stove-page__frame__item__button`]}>판매 목록</button>
                </div>
                <div className={style[`stove-page__frame__item`]}>
                    <img src={Reset} alt="" className={style[`stove-page__frame__item__image`]} />
                    <span className={style[`stove-page__frame__item__text`]}>자산 리셋</span>
                    <button className={style[`stove-page__frame__item__button`]}>판매 목록</button>
                </div>
                <div className={style[`stove-page__frame__item`]}>
                    <img src={Twice} alt="" className={style[`stove-page__frame__item__image`]} />
                    <span className={style[`stove-page__frame__item__text`]}>투자 2배</span>
                    <button className={style[`stove-page__frame__item__button`]}>판매 목록</button>                
                </div>
                <div className={style[`stove-page__frame__item`]}>
                    <img src={Popular} alt="" className={style[`stove-page__frame__item__image`]} />
                    <span className={style[`stove-page__frame__item__text`]}>인기 종목</span>
                    <button className={style[`stove-page__frame__item__button`]}>판매 목록</button>                    
                </div>
                <div className={style[`stove-page__frame__item`]}>
                    <img src={Avoid} alt="" className={style[`stove-page__frame__item__image`]} />
                    <span className={style[`stove-page__frame__item__text`]}>손실 방어권</span>
                    <button className={style[`stove-page__frame__item__button`]}>판매 목록</button>                    
                </div>
                <div className={style[`stove-page__frame__item`]}>
                    <img src={Back} alt="" className={style[`stove-page__frame__item__image`]} />
                    <span className={style[`stove-page__frame__item__text`]}>1일차 리셋</span>
                    <button className={style[`stove-page__frame__item__button`]}>판매 목록</button>                    
                </div>
                <button className={style[`stove-page__frame__add`]}>
                    <span className={style[`stove-page__frame__add__title`]}>판매 등록</span>
                </button>
                <NavBar />
            </main>
        </section>
    );
}

export default StoveList;