import React from "react";
import { useState, useEffect } from "react";
import style from "./signup.module.css"
import { SignupBtn } from "../../components/button";

function SignupPage(prob) {
    return (
        <div className={style[`signup-page`]}>
            <MakeStar />
            <SignupBtn />
        </div>
    );
}

function MakeStar() {
    const [starSize, setStarSize] = useState(Math.max(window.innerHeight*2,window.innerWidth));
    const handleResize = () => {
        setStarSize(Math.max(window.innerHeight*2,window.innerWidth))
    }
    const maxSize = starSize;
    // 랜덤한 X 위치 값
    const getRandomX = () => Math.random() * maxSize;
    // 랜덤한 Y 위치 값
    const getRandomY = () => Math.random() * maxSize;
    // 랜덤한 크기 (circle는 반지름이 크기)
    const randomRadius = () => Math.random() * 0.5 + 0.6;
    // 임의의 값
    const _size = Math.floor(maxSize / 2);
    const htmlDummy = new Array(_size).fill().map((_, i) => { return <circle className={style[`signup-page__sky__star`]} cx={getRandomX()} cy={getRandomY()} r={randomRadius()}/>});
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
        },[]);
    return (
        <svg className={style[`signup-page__sky`]} style={{ width: Math.max(window.innerHeight*2,window.innerWidth), height : Math.max(window.innerHeight*2,window.innerWidth) }}>
            {htmlDummy}
        </svg>
    )
}

export { SignupPage }