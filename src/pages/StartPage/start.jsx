import styled from "./start.module.css"
import MakeStar from "../../hoc/makestar/makestar";
import mainlogo from "../../assets/images/logo.png"
import {Link} from "react-router-dom";

function StartPage() {
    return (
        <Link to="/signup">
        <section className={styled[`start-page`]}>
            <MakeStar />
            <img className={styled[`start-page__logo`]} src={mainlogo} alt="Start Main Logo" />
            <span id="start-page__content" className={styled[`start-page__content`]}>계속하려면 아무곳이나 클릭해 주세요.</span>
        </section>
        </Link>
    );
}

export default StartPage;