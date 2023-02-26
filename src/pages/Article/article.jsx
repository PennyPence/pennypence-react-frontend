import { useEffect, useState } from "react";
import style from "./article.module.css"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"
import axios from "axios";
import { Link } from "react-router-dom";
var backURL = process.env.REACT_APP_BACK_BASE_URL;


function ArticlePage() {
    const [articles, setArticles] = useState();
    const getArticle = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/article/`,
        });
        setArticles(res.data);
        console.log(res)
    };

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <section className={style[`rank-page`]}>
            <MakeStar />
            <main className={style[`rank-page__body`]}>
                <div className={style[`rank-page__body__others`]}>
                    {articles ? (
                        <>
                            {articles.map((data, idx) => {
                                return (
                                    <Link to={`/article/${data.id}?name=${data.title}`}
                                        className={style[`rank-page__body__others__form__info__money`]}>
                                        <span>{data.title}</span>
                                        <span className={style[`rank-page__body__others__form__info__money__nickname`]}>{data.user.nickname}</span>
                                    </Link>
                                )
                            })}
                        </>) : null}
                </div>
            </main>
            <NavBar />
        </section>
    );
}

export default ArticlePage;