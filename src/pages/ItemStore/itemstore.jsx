import style from "./itemstore.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import TestImage from "../../assets/images/logo.png"

var backURL = process.env.REACT_APP_BACK_BASE_URL;

function ItemStore() {
    const [itemsList, setItemsList] = useState()
    const items = async () => {
        const res = await axios({
            method: "get",
            url: `${backURL}/auction/21/`,
        });
        setItemsList(res.data.item)
    }

    useEffect(() => {
        items();
    },[])

    return (
        <>
            <section className={style[`store-page`]}>
            {itemsList ? 
            <>
            <div className={style[`store-page__box`]}>
                <img src={TestImage} alt="" className={style[`store-page__box__image`]} />
                <div className={style[`store-page__box__item`]}>
                    <span className={style[`store-page__box__item__name`]}>{itemsList.name}</span>
                    <span className={style[`store-page__box__item__detail`]}>{itemsList.detail}</span>
                </div>
            </div>
            <div className={style[`store-page__box`]}>
                <img src={TestImage} alt="" className={style[`store-page__box__image`]} />
                <div className={style[`store-page__box__item`]}>
                    <span className={style[`store-page__box__item__name`]}>{itemsList.name}</span>
                    <span className={style[`store-page__box__item__detail`]}>{itemsList.detail}</span>
                </div>
            </div>
            <div className={style[`store-page__box`]}>
                <img src={TestImage} alt="" className={style[`store-page__box__image`]} />
                <div className={style[`store-page__box__item`]}>
                    <span className={style[`store-page__box__item__name`]}>{itemsList.name}</span>
                    <span className={style[`store-page__box__item__detail`]}>{itemsList.detail}</span>
                </div>
            </div>
            <div className={style[`store-page__box`]}>
                <img src={TestImage} alt="" className={style[`store-page__box__image`]} />
                <div className={style[`store-page__box__item`]}>
                    <span className={style[`store-page__box__item__name`]}>{itemsList.name}</span>
                    <span className={style[`store-page__box__item__detail`]}>{itemsList.detail}</span>
                </div>
            </div>
            <div className={style[`store-page__box`]}>
                <img src={TestImage} alt="" className={style[`store-page__box__image`]} />
                <div className={style[`store-page__box__item`]}>
                    <span className={style[`store-page__box__item__name`]}>{itemsList.name}</span>
                    <span className={style[`store-page__box__item__detail`]}>{itemsList.detail}</span>
                </div>
            </div>
            <div className={style[`store-page__box`]}>
                <img src={TestImage} alt="" className={style[`store-page__box__image`]} />
                <div className={style[`store-page__box__item`]}>
                    <span className={style[`store-page__box__item__name`]}>{itemsList.name}</span>
                    <span className={style[`store-page__box__item__detail`]}>{itemsList.detail}</span>
                </div>
            </div>
            </>
            : null}
            </section>
        </>
    )
}

export default ItemStore