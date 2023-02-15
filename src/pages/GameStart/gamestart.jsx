import style from "./gamestart.module.css";
import logoImage from "../../assets/images/logo.png";
import { SignupBtn } from "../../components/button";
import MakeStar from "../../hoc/makestar/makestar";
import { Link } from "react-router-dom";

function GameStart() {
    return (
        <section className={style[`gamestart-page`]}>
            <MakeStar />
            <span className={style[`gamestart-page__title`]}>안녕하세요!</span>
            <span className={style[`gamestart-page__title`]}>게임을 시작해볼까요?</span>
            <img src={logoImage} className={style[`gamestart-page__img`]} alt="charactor" />
            <Link to="/basic">
                <SignupBtn content="시작하기"/>
            </Link>
        </section>
    );
}

export default GameStart;