import style from "./questiondetail.module.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import ModalForm from "../../components/modal";
var backURL = process.env.REACT_APP_BACK_BASE_URL;

function QuestionDetailPage() {
    const [article, setArticle] = useState();
    const [type, setType] = useState("comment");
    const postURL = `${backURL}/communities/comments/`;
    let { id } = useParams();
    const getArticle = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/question/${id}`,
        });
        setArticle(res.data);
        console.log(res);
    };
    const handleArticleSubmitted = () => {
        getArticle();
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
                                {article.user.profile_img ? <img src={article.user.profile_img} style={{ width: '10vw', borderRadius: '50%', marginRight: '10px' }} /> : null}
                                <span style={{ fontSize: '5vw' }}>{article.user.nickname}</span>
                            </div>
                            <span>{formattedDate}</span>
                        </div>
                        <div className={style[`rank-page__body__others__form__info__money`]}>
                            <span style={{ whiteSpace: 'pre-wrap' }}>{article.content}</span>
                        </div>
                        <div className={style[`rank-page__body__others__reply`]}>
                            <span style={{ color: 'white' }}>{article.comments.length ? article.comments.length + '개의 댓글' : '아직 댓글이 없어요.'}</span>
                            <ModalForm
                                type={type}
                                postURL={postURL}
                                onArticleSubmitted={handleArticleSubmitted}
                                article_id={article.id}
                                content_type={25}
                                parent={null}
                            />
                        </div>
                        {article.comments.map((data, idx) => {
                            return (
                                <div className={style[`rank-page__body__others__reply`]}>
                                    <span style={{ whiteSpace: 'pre-wrap' }}>{data.content}</span>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {article.user.profile_img ? <img src={article.user.profile_img} style={{ width: '8vw', borderRadius: '50%', marginRight: '10px' }} /> : null}
                                        <span>{data.user.nickname}</span>
                                    </div>
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