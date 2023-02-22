import style from "./communitydetail.module.css"
import TestImage from "../../assets/images/logo.png"
import Money from "../../assets/images/money.png"
import Gold from "../../assets/images/gold.png"
import Silver from "../../assets/images/silver.png"
import Bronze from "../../assets/images/bronze.png"
import MakeStar from "../../hoc/makestar/makestar"
import NavBar from "../../components/navbar"

function CommunityDetailPage() {
    return (
        <section className={style[`rank-page`]}>
            <MakeStar />
            <main className={style[`rank-page__body`]}>
                <div className={style[`rank-page__body__others`]}>
                    <div className={style[`rank-page__body__others__div`]}>
                        <div className={style[`rank-page__body__others__form__info__title`]}>
                            <span>글의 제목입니다</span>
                        </div>
                        <div className={style[`rank-page__body__others__form__info__id`]}>
                            <span>얼굴</span>
                            <span>아이디</span>
                        </div>
                    </div>

                    <div className={style[`rank-page__body__others__form__info__money`]}>
                        <span>나무위키:편집지침/일반 문서 프로필 표 내 상징 서술 금지 규정이 개정되었습니다. 해당 규정은 소급 적용됩니다. 변경 내용 보기
                            나무위키:편집지침/특정 분야/인문사회 10. 대중교통 분야 - 서비스에 대한 평가 서술 금지 규정이 신설되었습니다. 해당 규정은 소급 적용됩니다. 변경 내용 보기
                            나무위키:편집지침/등재 기준에서 10.4.3. Roblox 규정이 개정되었습니다. 해당 규정은 소급 적용됩니다. 변경 내용 보기
                            나무위키:편집지침/일반 문서에서 프로필 표 - 병역 관련 규정이 개정되었습니다. 해당 규정은 소급 적용됩니다. 변경 내용 보기
                            나무위키:편집지침/표제어에서 귀화 관련 표제어 및 프로필 표 인명 규정이 개정되었습니다. 해당 규정은 소급 적용됩니다. 변경 내용 보기, 변경 내용 보기
                            템플릿:마블 시네마틱 유니버스/등장인물에서 MCU 프로필 항목 표기가 개정되었습니다. 변경 내용 보기
                            나무위키:편집지침/특정 분야/문화예술에서 e스포츠 관련 규정이 개정되었습니다. 변경 내용 보기
                            나무위키:기본방침/이용자 관리 방침에서 편집 요약에서 잘못된 규정을 설파하는 행위를 편집 요약 불량으로 지정하는 규정이 신설되었습니다. 변경 내용 보기
                            템플릿:게임에서 가독성 개선 및 안내 문구가 추가되었습니다. 변경 내용 보기
                            템플릿:러브 라이브! School idol project series 곡에서 템플릿 간편화 및 하스노소라 여학원 스쿨 아이돌 클럽 및 유닛 프로필이 추가되었습니다. 변경 내용 보기
                            나무위키:편집지침/등재 기준에서 방송 플랫폼으로 간주하는 플랫폼 목록이 개정되었습니다. 변경 내용 보기
                            나무위키:기본방침에서 나무위키의 규정에 언급되는 시간의 해석법이 개정되었습니다. 변경 내용 보기
                            템플릿:마블 시네마틱 유니버스/등장인물에서 프로필 표 코믹스 작품명 표기가 개정되었습니다. 변경 내용 보기</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                    <div className={style[`rank-page__body__others__reply`]}>
                        <span>참나 진짜 이것도 몰랐네요</span>
                        <span>닉네임</span>
                    </div>
                </div>
            </main>
            <NavBar />
        </section>
    );
}

export default CommunityDetailPage;