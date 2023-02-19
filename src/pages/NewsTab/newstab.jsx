import style from "./newstab.module.css"
import NavBar from "../../components/navbar"
import MakeStar from "../../hoc/makestar/makestar"
import { useState } from "react";
import testImage from "../../assets/images/logo.png"

function NewsTab() {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabContentList = [
        {
            tabTitle : (
                <li onClick={() => tabHandler(0)} className={activeIndex===0 ? style[`tab-menu__active`] : style[`tab-menu`]}>반도체</li>
            ),
            tabContent : (
                <>
                    <header className={style[`newtab-page__header`]}>
                        <span className={style[`newtab-page__header__title__0`]}>반도체</span>
                        <span className={style[`newtab-page__header__invest`]}>투자하기</span>
                    </header>
                    <main className={style[`newtab-page__body`]}>
                        <hgroup className={style[`newtab-page__body__title`]}>
                            <span className={style[`newtab-page__body__title__text`]}>석유폭등</span>
                            <img src={testImage} alt="" className={style[`newtab-page__body__title__image`]}/>
                        </hgroup>
                        <div className={style[`newtab-page__body__contents`]}>
                            <span>사우디에서 증산하지 않겠다는 소식을 밝히면서 ---- 00산업에 영향이 있을거란 분석이 나오고 있습니다.</span>
                        </div>
                    </main>
                    <footer className={style[`newtab-page__footer`]}>
                        <span className={style[`newtab-page__footer__content`]}>반도체 재고 증가</span>
                    </footer>
                </>
            )
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(1)} className={activeIndex===1 ? style[`tab-menu__active`] : style[`tab-menu`]}>바이오</li>
            ),
            tabContent : (
                <>
                    <header className={style[`newtab-page__header`]}>
                        <span className={style[`newtab-page__header__title__1`]}>바이오</span>
                        <span className={style[`newtab-page__header__invest`]}>투자하기</span>
                    </header>
                    <main className={style[`newtab-page__body`]}>
                        <hgroup className={style[`newtab-page__body__title`]}>
                            <span className={style[`newtab-page__body__title__text`]}>석유폭등</span>
                            <img src={testImage} alt="" className={style[`newtab-page__body__title__image`]}/>
                        </hgroup>
                        <div className={style[`newtab-page__body__contents`]}>
                            <span>사우디에서 증산하지 않겠다는 소식을 밝히면서 ---- 00산업에 영향이 있을거란 분석이 나오고 있습니다.</span>
                        </div>
                    </main>
                    <footer className={style[`newtab-page__footer`]}>
                        <span className={style[`newtab-page__footer__content`]}>반도체 재고 증가</span>
                    </footer>
                </>
            )
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(2)} className={activeIndex===2 ? style[`tab-menu__active`] : style[`tab-menu`]}>자동차</li>
            ),
            tabContent : (
                <>
                    <header className={style[`newtab-page__header`]}>
                        <span className={style[`newtab-page__header__title__2`]}>자동차</span>
                        <span className={style[`newtab-page__header__invest`]}>투자하기</span>
                    </header>
                    <main className={style[`newtab-page__body`]}>
                        <hgroup className={style[`newtab-page__body__title`]}>
                            <span className={style[`newtab-page__body__title__text`]}>석유폭등</span>
                            <img src={testImage} alt="" className={style[`newtab-page__body__title__image`]}/>
                        </hgroup>
                        <div className={style[`newtab-page__body__contents`]}>
                            <span>사우디에서 증산하지 않겠다는 소식을 밝히면서 ---- 00산업에 영향이 있을거란 분석이 나오고 있습니다.</span>
                        </div>
                    </main>
                    <footer className={style[`newtab-page__footer`]}>
                        <span className={style[`newtab-page__footer__content`]}>반도체 재고 증가</span>
                    </footer>
                </>
            )
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(3)} className={activeIndex===3 ? style[`tab-menu__active`] : style[`tab-menu`]}>IT</li>
            ),
            tabContent : (
                <>
                    <header className={style[`newtab-page__header`]}>
                        <span className={style[`newtab-page__header__title__3`]}>IT</span>
                        <span className={style[`newtab-page__header__invest`]}>투자하기</span>
                    </header>
                    <main className={style[`newtab-page__body`]}>
                        <hgroup className={style[`newtab-page__body__title`]}>
                            <span className={style[`newtab-page__body__title__text`]}>석유폭등</span>
                            <img src={testImage} alt="" className={style[`newtab-page__body__title__image`]}/>
                        </hgroup>
                        <div className={style[`newtab-page__body__contents`]}>
                            <span>사우디에서 증산하지 않겠다는 소식을 밝히면서 ---- 00산업에 영향이 있을거란 분석이 나오고 있습니다.</span>
                        </div>
                    </main>
                    <footer className={style[`newtab-page__footer`]}>
                        <span className={style[`newtab-page__footer__content`]}>반도체 재고 증가</span>
                    </footer>
                </>
            )
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(4)} className={activeIndex===4 ? style[`tab-menu__active`] : style[`tab-menu`]}>게임</li>
            ),
            tabContent : (
                <>
                    <header className={style[`newtab-page__header`]}>
                        <span className={style[`newtab-page__header__title__4`]}>게임</span>
                        <span className={style[`newtab-page__header__invest`]}>투자하기</span>
                    </header>
                    <main className={style[`newtab-page__body`]}>
                        <hgroup className={style[`newtab-page__body__title`]}>
                            <span className={style[`newtab-page__body__title__text`]}>석유폭등</span>
                            <img src={testImage} alt="" className={style[`newtab-page__body__title__image`]}/>
                        </hgroup>
                        <div className={style[`newtab-page__body__contents`]}>
                            <span>사우디에서 증산하지 않겠다는 소식을 밝히면서 ---- 00산업에 영향이 있을거란 분석이 나오고 있습니다.</span>
                        </div>
                    </main>
                    <footer className={style[`newtab-page__footer`]}>
                        <span className={style[`newtab-page__footer__content`]}>반도체 재고 증가</span>
                    </footer>
                </>
            )
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(5)} className={activeIndex===5 ? style[`tab-menu__active`] : style[`tab-menu`]}>엔터테인먼트</li>
            ),
            tabContent : (
                <>
                    <header className={style[`newtab-page__header`]}>
                        <span className={style[`newtab-page__header__title__5`]}>엔터테인먼트</span>
                        <span className={style[`newtab-page__header__invest`]}>투자하기</span>
                    </header>
                    <main className={style[`newtab-page__body`]}>
                        <hgroup className={style[`newtab-page__body__title`]}>
                            <span className={style[`newtab-page__body__title__text`]}>석유폭등</span>
                            <img src={testImage} alt="" className={style[`newtab-page__body__title__image`]}/>
                        </hgroup>
                        <div className={style[`newtab-page__body__contents`]}>
                            <span>사우디에서 증산하지 않겠다는 소식을 밝히면서 ---- 00산업에 영향이 있을거란 분석이 나오고 있습니다.</span>
                        </div>
                    </main>
                    <footer className={style[`newtab-page__footer`]}>
                        <span className={style[`newtab-page__footer__content`]}>반도체 재고 증가</span>
                    </footer>
                </>
            )
        }
        
    ]

    const tabHandler = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <section className={style[`newtab-page`]}>
            <MakeStar />
            <ul className={style[`newtab-page__tabs`]}>
                {tabContentList.map((section, index)=> {
                    return section.tabTitle
                })}
            </ul>
            { tabContentList[activeIndex].tabContent}
            <NavBar />
        </section>
    );
}

export default NewsTab;