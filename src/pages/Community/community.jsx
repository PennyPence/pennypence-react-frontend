import style from "./community.module.css"
import TestImage from "../../assets/images/logo.png"
import Money from "../../assets/images/money.png"
import Gold from "../../assets/images/gold.png"
import Silver from "../../assets/images/silver.png"
import Bronze from "../../assets/images/bronze.png"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"

function CommunityPage() {
    return (
        <section className={style[`rank-page`]}>
            <MakeStar />
            <main className={style[`rank-page__body`]}>
                <div className={style[`rank-page__body__others`]}>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>커뮤니티 제목입..</span>
                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>닉네임</span>
                    </div>
                </div>
            </main>
            <NavBar />
        </section>
    );
}

export default CommunityPage;