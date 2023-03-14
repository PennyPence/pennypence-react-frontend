import style from "./editinfo.module.css"
import Search from "../../assets/images/search.png"
function EditInfo() {
    return (
        <>
            <div className={style.edit__header}>
                <span className={style.edit__header__name}>닉네임 변경</span>
                <div className={style.edit__header__check}>
                    <input type="text" className={style.edit__header__check__input} placeholder="바꿀 닉네임을 입력해주세요!"/>
                    <button className={style.edit__header__check__button}>중복확인</button>
                </div>
            </div>
            <div className={style.edit__body}>
                <input type="image" src={Search} className={style.edit__body__image}/>
                <div className={style.edit__body__school}>
                    <span className={style.edit__body__school__title}>우리 학교 찾기</span>
                    <div className={style.edit__body__school__search}>
                        <input type="text" className={style.edit__body__school__search__input} />
                        <img src={Search} className={style.edit__body__school__search__icon} alt="" /> 
                    </div>
                    <div className={style.edit__body__school__list}>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditInfo;