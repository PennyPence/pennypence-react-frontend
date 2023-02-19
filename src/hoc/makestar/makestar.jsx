import style from "./makestar.module.css"
import { useEffect, useState } from "react";

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
    const htmlDummy = new Array(_size).fill().map((_, i) => { return <circle key={i} className={style.star} cx={getRandomX()} cy={getRandomY()} r={randomRadius()}/>});
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
        },[]);
    return (
        <svg className={style.sky} style={{ width: Math.max(window.innerHeight*2,window.innerWidth), height : Math.max(window.innerHeight*2,window.innerWidth) }}>
            {htmlDummy}
        </svg>
    )
}

export default MakeStar;