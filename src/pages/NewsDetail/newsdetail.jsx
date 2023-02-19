import style from "./newsdetail.module.css"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"
import testImage from "../../assets/images/logo.png"
import { useState } from "react"

function NewsDetailPage(prob) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabContentArr = [
        {
            tabTitle : (
                <li onClick={() => tabHandler(0)} className={activeIndex===0 ? style[`tab-menu__active`] : style[`tab-menu`]}> 최신순 </li>
            ),
            tabContent : (
                <>
                <span className={style[`tab-menu__page__title`]}> 새로운 소식! </span>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                </>
            )
        },
        {
            tabTitle:(
                <li onClick={() => tabHandler(1)} className={activeIndex===1 ? style[`tab-menu__active`] : style[`tab-menu`]}> 일자순 </li>
            ),
            tabContent:(
                <>
                <span className={style[`tab-menu__page__title`]}> 새로운 소식! </span>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                <div className={style[`tab-menu__page`]}>
                    <div className={style[`tab-menu__page__box`]}>
                        <div className={style[`tab-menu__page__box__texts`]}>
                            <span className={style[`tab-menu__page__box__texts__title`]}>석유폭등</span>
                            <span className={style[`tab-menu__page__box__texts__content`]}>블라블라 뉴스 내용 칸입니다.</span>
                        </div>
                        <img className={style[`tab-menu__page__box__image`]} src={testImage} alt="" />
                    </div>
                </div>
                </>
            )
        }
    ];

    const tabHandler = (index) => {
        setActiveIndex(index)
    }

    return (
        <section className={style[`detail-page`]}>
        <MakeStar />
        <ul className={style.tabs}>
            {tabContentArr.map((section, index)=>{
                return section.tabTitle
            })}
        </ul>
        { tabContentArr[activeIndex].tabContent };
        <NavBar basicContain={prob.basicContain}/>
        </section>
    );
}

export default NewsDetailPage