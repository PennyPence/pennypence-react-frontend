import { useEffect, useState } from "react";
import style from "./article.module.css"
import axios from "axios";
import { Link } from "react-router-dom";
import ModalForm from "../../components/modal";
import Topbar from "../../components/topbar";

var backURL = process.env.REACT_APP_BACK_BASE_URL;


function ArticlePage() {

    const [articles, setArticles] = useState();
    const [type, setType] = useState("article");
    const postURL = `${backURL}/communities/article/`;

    const handleArticleSubmitted = () => {
        getArticle();
    };

    const getArticle = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/article/`,
        });
        setArticles(res.data);
    };

    useEffect(() => {
        getArticle();
    }, []);

    function limitText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + "...";
    }

    return (
        <>
            <Topbar pagename='자유게시판' />
            <ModalForm
                type={type}
                postURL={postURL}
                onArticleSubmitted={handleArticleSubmitted}
            />
            <div className={style[`rank-page__body__others`]}>

                {articles ? (
                    <>
                        {articles.map((data, idx) => {
                            const title = limitText(data.title, 9);
                            const nickname = limitText(data.user.nickname, 5);
                            return (
                                <Link to={`/article/${data.id}?name=${title}`}
                                    className={style[`rank-page__body__others__form__info__money`]}>
                                    <span>{title}</span>
                                    <span className={style[`rank-page__body__others__form__info__money__nickname`]}>{nickname ? nickname : '익명'}</span>
                                </Link>
                            )
                        })}
                    </>) : null}
            </div>
        </>
    );
}

export default ArticlePage;