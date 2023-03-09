import { useState, useEffect } from 'react';
import style from './reply.module.css'
import axios from "axios";
import anonymousIMG from "../assets/images/anonymous.png"

function Reply(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        setReplies([]);
    }, [props.repliesCount]);

    const getReply = async () => {
        const res = await axios({
            method: "get",
            url: props.getURL,
        });
        setReplies(res.data);
        console.log(res.data);
    };
    useEffect(() => {
        if (isExpanded && !replies.length) {
            getReply();
        }

    }, [isExpanded, props.getURL, replies.length]);

    function toggleExpanded() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <div onClick={toggleExpanded}>
                <p style={{ color: 'white' }}>
                    {isExpanded ? '▲' : '▼'} 답글 {props.repliesCount}개
                </p>
            </div>
            {isExpanded && (
                <ul>
                    {replies.map(comment => (
                        <div key={comment.id}>
                            <div className={style.commentDiv}>
                                <div style={{ maxWidth: '8vw', marginRight: '10px' }}>
                                    {comment.user.profile_img ? (
                                        <img src={comment.user.profile_img} style={{ width: '8vw', borderRadius: '50%' }} />
                                    ) : <img src={anonymousIMG} style={{ width: '8vw' }} />}
                                </div>
                                <div>
                                    <p style={{ margin: '0 0 2vw 0' }}>{comment.user.nickname}<span style={{ color: 'rgb(136, 136, 136)' }}> · {props.detailDate(new Date(comment.created_at))}</span></p>
                                    <p style={{ whiteSpace: 'pre-wrap', margin: '0 0 2vw 0' }}>{comment.content}</p>
                                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <props.HeartIcon
                                            id={comment.id}
                                            like_count={comment.like_count}
                                            reply={1}
                                            getReply={getReply}
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Reply;