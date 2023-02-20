import React from "react";
import style from "./button.module.css"

// var backURL = process.env.BACK_BASE_URL
// var kakao = process.env.KAKAO_API_KEY
function SignupBtn(prob) {
    const FRONTURL = process.env.REACT_APP_FRONT_BASE_URL
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY
    const KAKAO_CALLBACK_URI = FRONTURL + '/oauth/kakao/callback/'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_CALLBACK_URI}&response_type=code`

    return (
        <div className={style[`button-form`]}>
            <a href={KAKAO_AUTH_URL} className={style[`button-form__content`]}>{prob.content}</a>
        </div>
    );
}

export { SignupBtn }
