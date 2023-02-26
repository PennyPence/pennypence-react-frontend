import style from "./questiondetail.module.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';

var backURL = process.env.REACT_APP_BACK_BASE_URL;

function QuestionDetailPage() {
    const [article, setArticle] = useState();
    let { id } = useParams();
    const getArticle = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/question/${id}`,
        });
        setArticle(res.data);
        console.log(res);
    };
    const formattedDate = article ? moment(article.created_at).format('YYYY.MM.DD. HH:mm') : null;
    useEffect(() => {
        getArticle();
    }, []);
    return (
        <>
            {article ? <>
                <main className={style[`rank-page__body`]}>
                    <div className={style[`rank-page__body__others`]}>
                        <div className={style[`rank-page__body__others__form__info__title`]}>
                            <span>{article.title}</span>
                        </div>
                        <div className={style[`rank-page__body__others__div`]}>
                            <div className={style[`rank-page__body__others__form__info__id`]}>
                                {article.user.profile_img ? <img src={article.user.profile_img} /> : null}
                                <span>{article.user.nickname}</span>
                            </div>
                            <span>{formattedDate}</span>
                        </div>
                        <div className={style[`rank-page__body__others__form__info__money`]}>
                            <span>{article.content}</span>
                        </div>
                        <div className={style[`rank-page__body__others__reply`]}>
                            <span style={{ color: 'white' }}>{article.comments.length ? '댓글 ' + article.comments.length : '아직 댓글이 없어요.'}</span>
                            <span>댓글 작성</span>
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
        </>
    );
}

export default QuestionDetailPage;