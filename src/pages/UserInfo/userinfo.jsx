import style from "./userinfo.module.css"
import { useState,useEffect } from "react";
import Test from "../../assets/images/logo.png"
import Money from "../../assets/images/money.png"
import Hint from "../../assets/images/hint.png"
import { useSelector } from "react-redux";

function UserInfo() {
    const user = useSelector(state => state.user)
    const [userTab, setUserTab] = useState(0);
    const tabContentList = [
        {
            tabTitle : (
                <li onClick={() => tabHandler(0)} className={userTab===0 ? style.userinfo__tabs__list__active : style.userinfo__tabs__list}>
                    <div className={style.userinfo__tabs__list__content}>
                        <img src={Money} alt="" />
                        <span>아이템 목록</span>
                    </div>
                </li>
            ),
            tabContent : (
                <div className={style.userinfo__contents}>
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                </div>
            ),
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(0)} className={userTab===1 ? style.userinfo__tabs__list__active : style.userinfo__tabs__list}>
                    <div className={style.userinfo__tabs__list__content}>
                        <img src={Money} alt="" />
                        <span>아이템 목록</span>
                    </div>
                </li>
            ),
            tabContent : (
                <div className={style.userinfo__contents}>
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                </div>
            ),
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(0)} className={userTab===2 ? style.userinfo__tabs__list__active : style.userinfo__tabs__list}>
                    <div className={style.userinfo__tabs__list__content}>
                        <img src={Money} alt="" />
                        <span>아이템 목록</span>
                    </div>
                </li>
            ),
            tabContent : (
                <div className={style.userinfo__contents}>
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                </div>
            ),
        },
        {
            tabTitle : (
                <li onClick={() => tabHandler(0)} className={userTab===3 ? style.userinfo__tabs__list__active : style.userinfo__tabs__list}>
                    <div className={style.userinfo__tabs__list__content}>
                        <img src={Money} alt="" />
                        <span>아이템 목록</span>
                    </div>
                </li>
            ),
            tabContent : (
                <div className={style.userinfo__contents}>
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                    <div className={style.userinfo__contents__box}>
                        <img src={Hint} alt="" className={style.userinfo__contents__box__img} />
                        <span className={style.userinfo__contents__box__text}>힌트</span>
                        <span className={style.userinfo__contents__box__count}>X 5</span>
                    </div>
                    <hr />
                </div>
            ),
        }
    ]
    const tabHandler = (index) => {
        setUserTab(index)
    }
    console.log(user)
    return (
        <>
            <div className={style.userinfo__profile}>
                <img className={style.userinfo__profile__image} src={Test} alt="" />
                <div className={style.userinfo__profile__texts}>
                    <span className={style.userinfo__profile__texts__nickname}>흑석동불주먹짱짱</span>
                    <div className={style.userinfo__profile__texts__money}>
                        <img className={style.userinfo__profile__texts__money__img} src={Money} alt="" />
                        <span className={style.userinfo__profile__texts__money__count}>550,000</span>
                    </div>
                    <div className={style.userinfo__profile__texts__school}>
                        <img  class={style.userinfo__profile__texts__school__img} src={Money} alt="" />
                        <span class={style.userinfo__profile__texts__school__name} >OO초등학교</span>
                    </div>
                </div>
            </div>
            <ul className={style.userinfo__tabs}>
            {tabContentList.map((section, index)=> {
                return section.tabTitle
            })}
            </ul>
            { tabContentList[userTab].tabContent}
        </>
    )
}

export default UserInfo;