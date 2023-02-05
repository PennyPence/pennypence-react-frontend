import React from "react";
import style from "./button.module.css"

function SignupBtn(prob) {
    return (
        <div className={style[`button-form`]}>
            <p className={style[`button-form__content`]}>회원가입</p>
        </div>
    );
}

export { SignupBtn }