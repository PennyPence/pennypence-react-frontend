import style from "./stovedetail.module.css"
import NavBar from "../../components/navbar";
import Test from "../../assets/images/hint.png"


function StoveDetail() {
    return (
        <section className={style["stovedetail-page"]}>
            <main className={style[`stovedetail-page__frame`]}>
                <div className={style[`stovedetail-page__frame__hedaer`]}>
                    <img className={style[`stovedetail-page__frame__header__image`]} src={Test} alt="" />
                    <span className={style[`stovedetail-page__frame__header__text`]}>힌트</span>
                    <button className={style[`stovedetail-page__frame__hedaer__button`]}>판매 등록</button>
                </div>
                <div className={style[`stovedetail-page__frame__body`]}>
                    <div className={style[`stovedetail-page__frame__body__header`]}>
                        <span className={style[`stovedetail-page__frame__body__header__text`]}>남은 시간</span>
                        <span className={style[`stovedetail-page__frame__body__header__text`]}>가격</span>
                        <span className={style[`stovedetail-page__frame__body__header__text`]}></span>
                    </div>
                    <hr style={{margin: ".5rem 1rem"}}/>
                    <div className={style[`stovedetail-page__frame__body__contents`]}>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>1일 23시간</span> 
                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>힌트</span>
                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]}>판매 목록</button>
                        </div>
                    </div>
                    
                </div>
            </main>
        </section>
    );
}

export default StoveDetail;