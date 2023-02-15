import style from "./basicinfo.module.css";
import MakeStar from "../../hoc/makestar/makestar";
import logoImage from "../../assets/images/logo.png";
import upArrow from "../../assets/images/uparrow.png";
import downArrow from "../../assets/images/downarrow.png";
// <a href="https://www.flaticon.com/kr/free-icons/-" title="위쪽 화살표 아이콘">위쪽 화살표 아이콘  제작자: Creative Stall Premium - Flaticon</a>
function BasicInfo(prob) {
    return (
        <section className={style[`basicinfo-page`]}>
            <MakeStar />
            <span className={style[`basicinfo-page__title`]}>데이터님!</span>
            <span className={style[`basicinfo-page__title`]}>안녕하세요😊</span>
            <img src={logoImage} className={style[`basicinfo-page__user`]} alt="userImage" />
            <div className={style[`basicinfo-page__contentsbox`]}>
                {prob.info ? <img src={upArrow} className={style[`basicinfo-page__contentsbox__image`]} alt="upArrow" /> : <img src={downArrow} className={style[`basicinfo-page__contentsbox__image`]} alt="" /> }
                <span className={style[`basicinfo-page__contentsbox__small`]}>총 자산</span>
                <span className={style[`basicinfo-page__contentsbox__big`]}>10,000원</span>
                <span className={style[`basicinfo-page__contentsbox__middle`]}>어제보다 <span className={style[`basicinfo-page__contentsbox__increase`]}>3%</span></span>
                <span className={style[`basicinfo-page__contentsbox__middle`]}>자산이 증가했어요</span>
            </div>
        </section>
    );
}

export default BasicInfo;