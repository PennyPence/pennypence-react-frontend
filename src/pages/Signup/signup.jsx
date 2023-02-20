import React from "react";
import { Link } from "react-router-dom";
import style from "./signup.module.css"
import MakeStar from "../../hoc/makestar/makestar";
import { SignupBtn } from "../../components/button";

function SignupPage(prob) {
    return (
        <section className={style[`signup-page`]}>
            <MakeStar />
            {/* <Link to="/start"> */}
            <SignupBtn content="Kakao로 계속하기" />
            {/* </Link> */}
        </section>
    );
}

export { SignupPage }