import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
var backURL = process.env.REACT_APP_BACK_BASE_URL;

function HeartIcon(props) {
    const user = useSelector((state) => state.user);
    const [likeCount, setLikeCount] = useState(props.like_count)
    const [like, setLike] = useState();
    const getLike = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/communities/likes_list/?comment_id=${props.id}`
        });
        setLike(res.data);

    };

    const postLike = async () => {
        const res = await axios({
            method: "post",
            url: `${backURL}/communities/comments/${props.id}/like/`,
            data: {}
        });
        getLike();
        setLikeCount(res.data.like_count)
        if (props.reply) {
            props.getReply();
        }
    };

    useEffect(() => {
        getLike();
    }, []);

    const isLikedByUser = like && like.some((likedUser) => likedUser.user === user.id);
    return (
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <svg onClick={postLike} style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={`bi ${isLikedByUser ? 'bi-heart-fill' : 'bi-heart'}`} viewBox="0 0 16 16">
                {isLikedByUser ? <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> : <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />}
            </svg>
            <p style={{ margin: '0 3vw 0 0' }}>{likeCount}</p>
        </div>
    );
}

export default HeartIcon;