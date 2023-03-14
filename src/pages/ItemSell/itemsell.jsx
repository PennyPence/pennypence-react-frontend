import style from "./itemsell.module.css"
import Hint from "../../assets/images/hint.png"
import Info from "../../assets/images/infos.png"
import Money from "../../assets/images/money.png"
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar";

// <a href="https://www.flaticon.com/kr/free-icons/-" title="우리에 대해 아이콘">우리에 대해 아이콘  제작자: Anggara - Flaticon</a> 느낌표 아이콘
function ItemSell() {
    const user = useSelector((state) => state.user);
    console.log(user)
    return (
        <>
            <Topbar pagename='아이템 판매 등록' />
            <span className={style[`itemsell-page__title`]}>내 아이템 목록</span>
            <div className={style[`itemsell-page__list`]}>
                <div className={style[`itemsell-page__list__box`]}>
                    <img src={Hint} alt="" className={style[`itemsell-page__list__box__image`]} />
                    <span className={style[`itemsell-page__list__box__text`]}>힌트</span>
                    <span className={style[`itemsell-page__list__box__count`]}>X 5</span>
                </div>
                <hr />
                <div className={style[`itemsell-page__list__box`]}>
                    <img src={Hint} alt="" className={style[`itemsell-page__list__box__image`]} />
                    <span className={style[`itemsell-page__list__box__text`]}>힌트</span>
                    <span className={style[`itemsell-page__list__box__count`]}>X 5</span>
                </div>
                <hr />
                <div className={style[`itemsell-page__list__box`]}>
                    <img src={Hint} alt="" className={style[`itemsell-page__list__box__image`]} />
                    <span className={style[`itemsell-page__list__box__text`]}>힌트</span>
                    <span className={style[`itemsell-page__list__box__count`]}>X 5</span>
                </div>
                <hr />
                <div className={style[`itemsell-page__list__box`]}>
                    <img src={Hint} alt="" className={style[`itemsell-page__list__box__image`]} />
                    <span className={style[`itemsell-page__list__box__text`]}>힌트</span>
                    <span className={style[`itemsell-page__list__box__count`]}>X 5</span>
                </div>
            </div>
            <div className={style[`itemsell-page__sell`]}>
                <span className={style[`itemsell-page__sell__title`]}>판매 등록</span>
                <div className={style[`itemsell-page__sell__box`]}>
                    <img src={Hint} alt="" className={style[`itemsell-page__sell__box__image`]} />
                    <div className={style[`itemsell-page__sell__box__content`]}>
                        <span>힌트</span>
                        <img className={style[`itemsell-page__sell__box__content__info`]} src={Info} />
                    </div>
                    <input className={style[`itemsell-page__sell__box__input`]} type="text" placeholder="수량을 입력해주세요!" />
                </div>
                <div className={style[`itemsell-page__sell__box`]}>
                    <span className={style[`itemsell-page__sell__box__text__1`]}>판매할 가격</span>
                    <input className={style[`itemsell-page__sell__box__input`]} type="text" placeholder="가격을 입력해주세요!" />
                </div>
                <div className={style[`itemsell-page__sell__box`]}>
                    <span className={style[`itemsell-page__sell__box__text__2`]}>총 판매금액(수수료 포함)</span>
                    <input className={style[`itemsell-page__sell__box__input`]} type="text" placeholder="총 판매금액 계산" />
                </div>
                <div className={style[`itemsell-page__sell__box`]}>
                    <span className={style[`itemsell-page__sell__box__text__3`]}>힌트 최저가격</span>
                    <span className={style[`itemsell-page__sell__box__text`]}>
                        <img src={Money} alt="" />
                        50,000</span>
                </div>
            </div>
            <button className={style[`itemsell-page__button`]}>등록</button>
        </>
    );
}

export default ItemSell;