import style from "./investpage.module.css"
import TestLogo from "../../assets/images/logo.png"
import NavBar from "../../components/navbar"
import MakeStart from "../../hoc/makestar/makestar"
import Money from "../../assets/images/money.png"
import Graph from "../../assets/images/graph.png"


function InvestPage() {
    return (
        <section className={style[`invest-page`]}>
            <MakeStart />
            <header className={style[`invest-page__header`]}>
                <img src={Money} alt="" />
                <span className={style[`invest-page__header__text`]}>35,000</span>
            </header>
            <main className={style[`invest-page__body`]}>
                <div className={style[`invest-page__body__title`]}>
                    <img className={style[`invest-page__body__title__image`]} src={TestLogo} alt="" />
                    <div className={style[`invest-page__body__title__content`]}>
                        <span className={style[`invest-page__body__title__content__text`]}>IT</span>
                        <span className={style[`invest-page__body__title__content__text`]}>12,000 원</span>
                        <span className={style[`invest-page__body__title__content__text`]}>120 원 (10%)</span>
                    </div>
                    <button className={style[`invest-page__body__title__button`]}>주문</button>
                </div>
                <span className={style[`invest-page__body__article`]}>애플 "애플페이 한국 출시" 공식 발표</span>
                <div className={style[`invest-page__body__graph`]}>
                    <img src={Graph} alt="" />
                </div>
            </main>
            <NavBar />
        </section>
    );
}

export default InvestPage