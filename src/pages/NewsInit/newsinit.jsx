import MakeStar from "../../hoc/makestar/makestar";
import style from "./newsinit.module.css"
import NavBar from "../../components/navbar";

function InitNews() {
    return (
        <section className={style[`news-page`]}>
            <MakeStar />
            <div className={style[`news-page__infos`]}>
                <a className={style[`news-page__infos__link`]} href="#">
                    <div className={style[`news-page__infos__link__box`]}>
                        <span className={style[`news-page__infos__link__box__title__1`]}>반도체</span>
                    </div>
                </a>
                <a className={style[`news-page__infos__link`]} href="#">
                    <div className={style[`news-page__infos__link__box`]}>
                        <span className={style[`news-page__infos__link__box__title__2`]}>바이오</span>
                    </div>
                </a>
                <a className={style[`news-page__infos__link`]} href="#">
                    <div className={style[`news-page__infos__link__box`]}>
                        <span className={style[`news-page__infos__link__box__title__3`]}>자동차</span>
                    </div>
                </a>
                <a className={style[`news-page__infos__link`]} href="#">
                    <div className={style[`news-page__infos__link__box`]}>
                        <span className={style[`news-page__infos__link__box__title__4`]}>IT</span>
                    </div>
                </a>
                <a className={style[`news-page__infos__link`]} href="#">
                    <div className={style[`news-page__infos__link__box`]}>
                        <span className={style[`news-page__infos__link__box__title__5`]}>게임</span>
                    </div>
                </a>
                <a className={style[`news-page__infos__link`]} href="#">
                    <div className={style[`news-page__infos__link__box`]}>
                        <span className={style[`news-page__infos__link__box__title__6`]}>엔터테인먼트</span>
                    </div>
                </a>
            </div>
            <NavBar />
        </section>
    );
}

export default InitNews;