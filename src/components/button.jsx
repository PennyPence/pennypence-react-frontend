import React from "react";
import style from "./button.module.css"

function SignupBtn(prob) {
    return (
        <div className={style[`button-form`]}>
            <p className={style[`button-form__content`]}>{prob.content}</p>
        </div>
    );
}

export { SignupBtn }