import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import style from "./modal.module.css";
import { CSSTransition } from "react-transition-group";

const ModalForm = ({ type, postURL, isOpen, onRequestClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(postURL, { title, content });
            console.log(response.data);
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
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={{
                enter: style.modal_enter,
                enterActive: style.modal_enter_active,
                exit: style.modal_exit,
                exitActive: style.modal_exit_active,
            }}
            unmountOnExit
        >
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName={style.modal_overlay}
                className={style.modal}
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
        </CSSTransition>
    );
};

export default ModalForm;