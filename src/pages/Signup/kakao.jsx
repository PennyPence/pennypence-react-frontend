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
    let navigate = useNavigate();
    useEffect(() => {
        console.log(code)
        axios({
            method: 'get',
            url: `${baseURL}/accounts/kakao/callback/?code=${code}`,
        })
            .then((res) => {
                console.log(res.data.user)
                if (res.status === 200) {
                    dispatch(loginUser({ ...res.data.user, access_token: res.data.access_token, refresh_token: res.data.refresh_token }));
                }
                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
                localStorage.setItem('Authorization', `Bearer ${res.data.access_token}`)
                // setTimeout(() => <h1>Loading...</h1>, 200);
                navigate("/question");
            })
    }, [])
    return (
        <>
        <h1>Loading...</h1>
        </>
    );
}

export default KaKaoAuth