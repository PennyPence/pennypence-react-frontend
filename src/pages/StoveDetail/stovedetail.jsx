import style from "./stovedetail.module.css"
import { useParams, useLocation } from "react-router-dom";
import Topbar from "../../components/topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import { Link } from "react-router-dom";

var backURL = process.env.REACT_APP_BACK_BASE_URL;

function StoveDetail() {
    const [items, setItems] = useState();
    const location = useLocation();
    const { Img, Detail } = location.state
    let { id } = useParams();
    const name = new URL(window.location.href).searchParams.get("name");
    const getItem = async () => {
        try {
            const res = await axios({
                method: "get",
                url: `${backURL}/auction/?item_id=${id}`
            });
            setItems(res.data);
        }
        catch (error) {
            console.log(error)
        }
    };
    const putItem = async (id) => {
        try {
            const res = await axios({
                method: "put",
                url: `${backURL}/auction/${id}/`
            })
            getItem();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getItem();
    }, []);
    return (
        <>
            <Topbar pagename={`${name} 거래소`} />
            <section className={style["stovedetail-page"]}>
                <main className={style[`stovedetail-page__frame`]}>
                    <div className={style[`stovedetail-page__frame__hedaer`]}>
                        <img className={style[`stovedetail-page__frame__header__image`]} src={Img} alt="" />
                        <span className={style[`stovedetail-page__frame__header__text`]}>{name}</span>
                        <Link to='/itemsell' className={style[`stovedetail-page__frame__hedaer__button`]}>
                            판매 등록
                        </Link>
                    </div>
                    <div className={style[`stovedetail-page__frame__body`]}>
                        <div className={style[`stovedetail-page__frame__body__header`]}>
                            <span className={style[`stovedetail-page__frame__body__header__text`]}>등록 시간</span>
                            <span className={style[`stovedetail-page__frame__body__header__text`]}>가격</span>
                            <span className={style[`stovedetail-page__frame__body__header__text`]}></span>
                        </div>
                        <hr style={{ margin: ".5rem 1rem" }} />
                        <div className={style[`stovedetail-page__frame__body__contents`]}>
                            {items && items.length > 0 ? (<>
                                {items.map((data, idx) => {
                                    return (
                                        <div className={style[`stovedetail-page__frame__body__contents__box`]}>
                                            <span className={style[`stovedetail-page__frame__body__contents__box__time`]}>{moment(data.created_at).format('YYYY.MM.DD. HH:mm')}</span>
                                            <span className={style[`stovedetail-page__frame__body__contents__box__text`]}>{data.price}원</span>
                                            <button className={style[`stovedetail-page__frame__body__contents__box__button`]} onClick={() => putItem(data.id)}>구매</button>
                                        </div>
                                    )
                                })}
                            </>
                            ) : <p style={{ color: 'white' }}>아직 판매 등록된 상품이 없어요.😥</p>}
                        </div>

                    </div>
                </main>
            </section>
        </>
    );
}

export default StoveDetail;