import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCode } from "../../store/KakaoAuth.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/userSlice.js'
// import toast, { Toaster } from "react-hot-toast";
var baseURL = process.env.REACT_APP_BACK_BASE_URL

const KaKaoAuth = () => {
    const dispatch = useDispatch();
    const code = new URL(window.location.href).searchParams.get('code');
    useEffect(() => {
        console.log(code)
        axios({
            method: 'get',
            url: `${baseURL}/accounts/kakao/callback/?code=${code}`,
        })
            .then((res) => {
                console.log(res.data.user)
                if (res.status === 200) {
                    dispatch(loginUser({id: res.data.user.id, access_token: res.data.access_token, refresh_token: res.data.refresh_token }));
                }
                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
                localStorage.setItem('Authorization', `Bearer ${res.data.access_token}`)
                console.log("여기");
                // setTimeout(() => toast.success("정상적으로 로그인이 되었습니다."), 200);
                // navigate('/news')
            })
    }, [])


    return (
        <>
            <p>1111</p>
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Spinner animation="border" /> */}
        </>
    )
}

export default KaKaoAuth