import axios from "axios";
import style from "./modal.module.css";
import Swal from "sweetalert2";

function ReplyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
    );
}

function CommentIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    )
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
    if (type === 'article') {
        return (
            <div className={style.myButtonDiv}>
                <div
                    className={style.myButton}
                    onClick={handleArticleCreateButtonClick}
                >
                    <p style={{ margin: "0" }}>글 작성</p>
                </div>
            </div>
        )
    }
    else if (type === 'comment') {
        return (
            <div
                className={style.reply}
                onClick={handleCommentCreateButtonClick}
            >
                <CommentIcon />
            </div>
        )
    }
    else {
        return (
            <div
                className={style.reply}
                onClick={handleCommentCreateButtonClick}>
                <ReplyIcon />
            </div>)
    }

};

export default ModalForm;
