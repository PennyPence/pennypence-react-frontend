import axios from "axios";
import style from "./modal.module.css";
import Swal from "sweetalert2";

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
        <div className={style.myButtonDiv}>
            <div
                className={style.myButton}
                onClick={type === "article" ? handleArticleCreateButtonClick : handleCommentCreateButtonClick}
            >
                <p style={{ margin: "0" }}>{type === "article" ? "글 작성" : "댓글 작성"}</p>
            </div>
        </div>
    );
};

export default ModalForm;
