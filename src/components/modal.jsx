import axios from "axios";
import style from "./modal.module.css";
import Swal from "sweetalert2";

function CommentIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
    );
}

const ModalForm = ({ type, postURL, onArticleSubmitted, article_id, content_type, parent }) => {
    const handleSubmit = (title, content) => {
        axios
            .post(postURL, {
                title: title,
                content: content,
                content_type: content_type,
                parent: parent,
                object_id: article_id,
            })
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "글이 작성되었습니다.",
                    showConfirmButton: false,
                    timer: 1000,
                });
                onArticleSubmitted();
            });
    };

    const handleArticleCreateButtonClick = (e) => {
        Swal.fire({
            title: "제목을 적어주세요.",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Next",
            showLoaderOnConfirm: true,
            preConfirm: (title) => {
                return title;
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((titleResult) => {
            if (titleResult.isConfirmed) {
                Swal.fire({
                    title: "내용을 적어주세요.",
                    input: "textarea",
                    inputAttributes: {
                        autocapitalize: "off",
                    },
                    showCancelButton: true,
                    confirmButtonText: "Create",
                    showLoaderOnConfirm: true,
                    preConfirm: (content) => {
                        return content;
                    },
                    allowOutsideClick: () => !Swal.isLoading(),
                }).then((contentResult) => {
                    if (contentResult.isConfirmed) {
                        handleSubmit(titleResult.value, contentResult.value);
                    }
                });
            }
        });
        e.preventDefault();
        e.stopPropagation();
    };

    const handleCommentCreateButtonClick = (e) => {
        Swal.fire({
            title: "내용을 적어주세요.",
            input: "textarea",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Create",
            showLoaderOnConfirm: true,
            preConfirm: (content) => {
                return content;
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((contentResult) => {
            if (contentResult.isConfirmed) {
                handleSubmit('', contentResult.value);
            }
        });
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <>
            {type === 'article' || type === 'comment' ? <div className={style.myButtonDiv}>
                <div
                    className={style.myButton}
                    onClick={type === "article" ? handleArticleCreateButtonClick : handleCommentCreateButtonClick}
                >
                    <p style={{ margin: "0" }}>{type === "article" ? "글 작성" : "댓글 작성"}</p>
                </div>
            </div> : <div
                className={style.reply}
                onClick={handleCommentCreateButtonClick}>
                <CommentIcon />
            </div>}
        </>
    )
};

export default ModalForm;
