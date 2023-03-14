import style from "./articledetail.module.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import ModalForm from "../../components/modal";
import Reply from "../../components/reply";
import anonymousIMG from "../../assets/images/anonymous.png"
import { useSelector } from "react-redux";
import HeartIcon from "../../components/heartIcon"
import Topbar from "../../components/topbar";

var backURL = process.env.REACT_APP_BACK_BASE_URL;

function ArticleDetailPage() {
    const [article, setArticle] = useState();
    const [type, setType] = useState("comment");;
    const postURL = `${backURL}/communities/comments/`;
    let { id } = useParams();
    const name = new URL(window.location.href).searchParams.get("name");
    const getArticle = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/article/${id}`,
        });
        setArticle(res.data);
    };

    const handleArticleSubmitted = () => {
        getArticle();
    };

    const formattedDate = article ? moment(article.created_at).format('YYYY.MM.DD. HH:mm') : null;
    useEffect(() => {
        getArticle();
    }, []);

    const detailDate = (a) => {
        const milliSeconds = new Date() - a;
        const seconds = milliSeconds / 1000;
        if (seconds < 60) return `방금 전`;
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}분 전`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}시간 전`;
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}일 전`;
        const weeks = days / 7;
        if (weeks < 5) return `${Math.floor(weeks)}주 전`;
        const months = days / 30;
        if (months < 12) return `${Math.floor(months)}개월 전`;
        const years = days / 365;
        return `${Math.floor(years)}년 전`;
    };

    return (
        <>
            <Topbar key='detail' pagename={name ? name : ''} />
            {article ? (
                <main className={style[`rank-page__body`]}>
                    <div className={style[`rank-page__body__others`]}>
                        <div className={style[`rank-page__body__others__form__info__title`]}>
                            <span>{article.title}</span>
                        </div>
                        <div style={{ color: 'white', display: 'flex', justifyContent: 'end' }}>
                            <HeartIcon
                                like_count={article.like_count}
                                getURL={`${backURL}/communities/likes_list/?article_id=${article.id}`}
                                postURL={`${backURL}/communities/article/${article.id}/like/`}
                            />
                        </div>
                        <div className={style[`rank-page__body__others__div`]}>
                            <div className={style[`rank-page__body__others__form__info__id`]}>
                                {article.user.profile_img ? (
                                    <img src={article.user.profile_img} style={{ width: '10vw', borderRadius: '50%', marginRight: '10px' }} />
                                ) : <img src={anonymousIMG} style={{ width: '10vw', marginRight: '10px' }} />}
                                <span style={{ fontSize: '5vw' }}>{article.user.nickname}</span>
                            </div>
                            <span>{formattedDate}</span>
                        </div>
                        <div className={style[`rank-page__body__others__form__info__money`]}>
                            <span style={{ whiteSpace: 'pre-wrap' }}>{article.content}</span>
                        </div>
                        <div className={style[`rank-page__body__others__reply`]}>
                            <span style={{ color: 'white' }}>
                                {article.comments.length ? `${article.comments.length}개의 댓글` : '아직 댓글이 없어요 😥'}
                            </span>
                            <ModalForm
                                type={type}
                                postURL={postURL}
                                onArticleSubmitted={handleArticleSubmitted}
                                article_id={article.id}
                                content_type={24}
                                parent={null}
                            />
                        </div>
                        {article.comments.map((comment) => (
                            <div key={comment.id}>
                                <div className={style.commentDiv}>
                                    <div style={{ maxWidth: '8vw', marginRight: '10px' }}>
                                        {comment.user.profile_img ? (
                                            <img src={comment.user.profile_img} style={{ width: '8vw', borderRadius: '50%' }} />
                                        ) : <img src={anonymousIMG} style={{ width: '8vw' }} />}
                                    </div>
                                    <div>
                                        <p style={{ margin: '0 0 2vw 0' }}>{comment.user.nickname}<span style={{ color: 'rgb(136, 136, 136)' }}> · {detailDate(new Date(comment.created_at))}</span></p>
                                        <p style={{ whiteSpace: 'pre-wrap', margin: '0 0 2vw 0' }}>{comment.content}</p>
                                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <HeartIcon
                                                id={comment.id}
                                                like_count={comment.like_count}
                                                getURL={`${backURL}/communities/likes_list/?comment_id=${comment.id}`}
                                                postURL={`${backURL}/communities/comments/${comment.id}/like/`}
                                            />
                                            <ModalForm
                                                type={"reply"}
                                                postURL={`${postURL}${comment.id}/replies/`}
                                                onArticleSubmitted={handleArticleSubmitted}
                                                article_id={article.id}
                                                content_type={24}
                                                parent={null}
                                            />
                                        </div>
                                        {comment.replies_count > 0 ? (
                                            <Reply
                                                commentId={comment.id}
                                                repliesCount={comment.replies_count}
                                                getURL={`${backURL}/communities/comments/?comment_id=${comment.id}`}
                                                HeartIcon={HeartIcon}
                                                detailDate={detailDate}
                                            />
                                        ) : null}
                                    </div>

                                </div>


                            </div>
                        ))}
                    </div>
                </main>
            ) : null}
        </>
    );
}

export default ArticleDetailPage;