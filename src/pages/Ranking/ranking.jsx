import style from "./ranking.module.css"
import TestImage from "../../assets/images/logo.png"
import Money from "../../assets/images/money.png"
import Gold from "../../assets/images/gold.png"
import Silver from "../../assets/images/silver.png"
import Bronze from "../../assets/images/bronze.png"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"

function RankingPage() {
    return (
        <section className={style[`rank-page`]}>
            <MakeStar />
            <header className={style[`rank-page__header`]}>
                <span className={style[`rank-page__header__text`]}>DAY 13</span>
            </header>
            <main className={style[`rank-page__body`]}>
                <header className={style[`rank-page__body__header`]}>
                    <img className={style[`rank-page__body__header__image`]} src={TestImage} alt="" />
                    <div className={style[`rank-page__body__header__contents`]}>
                        <span className={style[`rank-page__body__header__contents__rank`]}>21위</span>
                        <span className={style[`rank-page__body__header__contents__name`]}>김디니</span>
                    </div>
                    <div className={style[`rank-page__body__header__money`]}>
                        <img src={Money} alt="" />
                        <span >550,000</span>
                    </div>
                </header>
                <div className={style[`rank-page__body__others`]}>
                    <div className={style[`rank-page__body__others__form`]}>
                        <img className={style[`rank-page__body__others__form__rank`]} src={Gold} alt="" />
                        <img className={style[`rank-page__body__others__form__profile`]} src={TestImage} alt="" />
                        <div className={style[`rank-page__body__others__form__info`]}>
                            <span className={style[`rank-page__body__others__form__info__name`]}>커비</span>
                            <div className={style[`rank-page__body__others__form__info__money`]}>
                                <img src={Money} alt="" />
                                <span>850,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={style[`rank-page__body__others__form`]}>
                        <img className={style[`rank-page__body__others__form__rank`]} src={Silver} alt="" />
                        <img className={style[`rank-page__body__others__form__profile`]} src={TestImage} alt="" />
                        <div className={style[`rank-page__body__others__form__info`]}>
                            <span className={style[`rank-page__body__others__form__info__name`]}>커비</span>
                            <div className={style[`rank-page__body__others__form__info__money`]}>
                                <img src={Money} alt="" />
                                <span>810,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={style[`rank-page__body__others__form`]}>
                        <img className={style[`rank-page__body__others__form__rank`]} src={Bronze} alt="" />
                        <img className={style[`rank-page__body__others__form__profile`]} src={TestImage} alt="" />
                        <div className={style[`rank-page__body__others__form__info`]}>
                            <span className={style[`rank-page__body__others__form__info__name`]}>커비</span>
                            <div className={style[`rank-page__body__others__form__info__money`]}>
                                <img src={Money} alt="" />
                                <span>540,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={style[`rank-page__body__others__form`]}>
                        <span className={style[`rank-page__body__others__form__no-rank`]}>4</span>
                        <img className={style[`rank-page__body__others__form__profile`]} src={TestImage} alt="" />
                        <div className={style[`rank-page__body__others__form__info`]}>
                            <span className={style[`rank-page__body__others__form__info__name`]}>닉네임최대8글자</span>
                            <div className={style[`rank-page__body__others__form__info__money`]}>
                                <img src={Money} alt="" />
                                <span>430,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={style[`rank-page__body__others__form`]}>
                        <span className={style[`rank-page__body__others__form__no-rank`]}>5</span>
                        <img className={style[`rank-page__body__others__form__profile`]} src={TestImage} alt="" />
                        <div className={style[`rank-page__body__others__form__info`]}>
                            <span className={style[`rank-page__body__others__form__info__name`]}>닉네임7글자</span>
                            <div className={style[`rank-page__body__others__form__info__money`]}>
                                <img src={Money} alt="" />
                                <span>1,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={style[`rank-page__body__others__form`]}>
                        <span className={style[`rank-page__body__others__form__no-rank`]}>6</span>
                        <img className={style[`rank-page__body__others__form__profile`]} src={TestImage} alt="" />
                        <div className={style[`rank-page__body__others__form__info`]}>
                            <span className={style[`rank-page__body__others__form__info__name`]}>투자망함</span>
                            <div className={style[`rank-page__body__others__form__info__money`]}>
                                <img src={Money} alt="" />
                                <span>999</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <NavBar />
        </section>
    );
}

export default RankingPage;