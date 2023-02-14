import React from "react";
import { useState, useEffect } from "react";
import style from "./signup.module.css"
import MakeStar from "../../hoc/makestar/makestar";
import { SignupBtn } from "../../components/button";

function SignupPage(prob) {
    return (
        <section className={style[`signup-page`]}>
            <MakeStar />
            <SignupBtn />
        </section>
    );
}

export { SignupPage }