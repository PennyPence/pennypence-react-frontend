import style from "./communitydetail.module.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"

var backURL = process.env.REACT_APP_BACK_BASE_URL;

function CommunityDetailPage() {
    const [article, setArticle] = useState();
    let { id } = useParams();
    const getArticle = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/article/${id}`,
        });
        setArticle(res.data);
        console.log(res);
    };
    useEffect(() => {
        getArticle();
    }, []);
    return (

        <section className={style[`rank-page`]}>
            <MakeStar />
            {article ? <>
                <main className={style[`rank-page__body`]}>
                    <div className={style[`rank-page__body__others`]}>
                        <div className={style[`rank-page__body__others__div`]}>
                            <div className={style[`rank-page__body__others__form__info__title`]}>
                                <span>{article.title}</span>
                            </div>
                            <div className={style[`rank-page__body__others__form__info__id`]}>
                                {article.user.profile_img ? <img src={article.user.profile_img} /> : null}
                                <span>{article.user.nickname}</span>
                            </div>
                        </div>

                        <div className={style[`rank-page__body__others__form__info__money`]}>
                            <span>{article.content}</span>
                        </div>
                        {article.comments.map((data, idx) => {
                            return (
                                <div className={style[`rank-page__body__others__reply`]}>
                                    <span>{data.content}</span>
                                    <span>{data.user.nickname}</span>
                                </div>
                            )
                        })}
                    </div>
                </main>
            </> : null}
            <NavBar />
        </section>
    );
}

export default CommunityDetailPage;