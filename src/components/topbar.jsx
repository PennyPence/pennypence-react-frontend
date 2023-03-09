import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import anonymousIMG from "../assets/images/anonymous.png"
import bellIMG from '../assets/images/bell.png'
function ArrowLeft() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
    )
}

function Topbar({ pagename }) {
    const user = useSelector((state) => state.user);
    console.log(user)
    let navigate = useNavigate()
    return (
        <div style={{ display: 'flex', zIndex: '1', justifyContent: 'space-between', width: '90vw', position: 'absolute', top: '3vh' }}>
            <div style={{ display: 'flex', color: 'white', fontWeight: '700', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }} onClick={() => { navigate(-1) }}>
                    <ArrowLeft />
                </div>
                <p style={{ margin: '0 0 0 10px' }}>{pagename}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={bellIMG} style={{ width: '8vw', marginRight: '15px' }} />
                {user.profile_image ? <img src={user.profile_image} style={{ width: '8vw', borderRadius: '50%', marginRight: '10px' }} />
                    : <img src={anonymousIMG} style={{ width: '8vw', marginRight: '10px' }} />}
            </div>
        </div>
    )
}

export default Topbar;