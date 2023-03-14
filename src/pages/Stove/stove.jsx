import style from "./stove.module.css"
import Twice from "../../assets/images/twice.png"
import Avoid from "../../assets/images/avoid.png"
import Back from "../../assets/images/back.png"
import Popular from "../../assets/images/popular.png"
import Reset from "../../assets/images/reset.png"
import Hint from "../../assets/images/hint.png"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"
import Topbar from "../../components/topbar"
import { Link } from "react-router-dom"

// <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: Freepik - Flaticon</a> 힌트 아이콘주소
// <a href="https://www.flaticon.com/free-icons/reset" title="reset icons">Reset icons created by Freepik - Flaticon</a> 리셋 아이콘주소
// <a href="https://www.flaticon.com/kr/free-icons/2" title="2 아이콘">2 아이콘  제작자: Freepik - Flaticon</a> 2배 아이콘
// <a href="https://www.flaticon.com/kr/free-icons/-" title="인기 있는 아이콘">인기 있는 아이콘  제작자: Freepik - Flaticon</a> 인기 아이콘 주소
// <a href="https://www.flaticon.com/kr/free-icons/" title="검 아이콘">검 아이콘  제작자: Freepik - Flaticon</a> 방패아이콘
// <a href="https://www.flaticon.com/kr/free-icons/" title="시각 아이콘">시각 아이콘  제작자: Freepik - Flaticon</a> 시간
const itemData = [
    {
        id: 1,
        name: "힌트",
        Img: Hint,
        Detail: "매수하기 전에 사고 싶은 종목의 힌트를 얻을 수 있어요.",
    },
    {
        id: 2,
        name: "자산 리셋",
        Img: Reset,
        Detail: "자산을 다시 처음으로 되돌릴 수 있어요.",
    },
    {
        id: 3,
        name: "투자 2배",
        Img: Twice,
        Detail: "투자한 금액의 2배로 얻을 수 있어요.",
    },
    {
        id: 4,
        name: "인기 종목",
        Img: Popular,
        Detail: "사람들이 많이 산 종목을 보여줘요.",
    },
    {
        id: 5,
        name: "손실 방어권",
        Img: Avoid,
        Detail: "손실 본 금액을 0으로 만들 수 있어요.",
    },
    {
        id: 6,
        name: "1일차 리셋",
        Img: Back,
        Detail: "다시 1일차로 돌아갈 수 있어요.",
    },
];

function StoveList() {
    return (
        <>
            <Topbar pagename='아이템 거래소' />
            <section className={style[`stove-page`]}>
                <main className={style[`stove-page__frame`]}>
                    {itemData.map((item) => (
                        <div className={style[`stove-page__frame__item`]} key={item.id}>
                            <img
                                src={item.Img}
                                alt=""
                                className={style[`stove-page__frame__item__image`]}
                            />
                            <span className={style[`stove-page__frame__item__text`]}>
                                {item.name}
                            </span>
                            <Link
                                to={`/stove/${item.id}?name=${item.name}`}
                                state={{
                                    Img: item.Img,
                                    Detail: item.Detail,
                                }}

                            >
                                <button className={style[`stove-page__frame__item__button`]}>
                                    판매 목록
                                </button>
                            </Link>
                        </div>
                    ))}
                    <button className={style[`stove-page__frame__add`]}>
                        <span className={style[`stove-page__frame__add__title`]}>판매 등록</span>
                    </button>
                </main>
            </section>
        </>
    );
}

export default StoveList;