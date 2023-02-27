import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import style from "./modal.module.css";
import { CSSTransition } from "react-transition-group";
import user from "../store/userSlice";

const ModalForm = ({ type, postURL, isOpen, onRequestClose, onArticleSubmitted }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(postURL, { title, content });
            console.log(response.data);
            setTitle('');
            setContent('');
            onArticleSubmitted();
        } catch (error) {
            console.error(error);
        }
        onRequestClose();
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={`${style.modal_overlay} ${isOpen ? style.open : style.close}`}
            className={`${style.modal} ${isOpen ? style.open : style.close}`}
            ariaHideApp={false}
        >
            <h2>{type === "article" ? "Create Article" : "Create Comment"}</h2>
            <form onSubmit={handleSubmit}>
                {type === "article" && (
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default ModalForm;
