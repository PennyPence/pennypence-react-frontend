import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import anonymousIMG from "../assets/images/anonymous.png"
import bellIMG from '../assets/images/bell.png'
import arrowIMG from '../assets/images/direction-arrow.png'

function Topbar({ pagename }) {
    const user = useSelector((state) => state.user);
    let navigate = useNavigate()
    return (
        <div style={{ display: 'flex', zIndex: '1', justifyContent: 'space-between', width: '90vw', position: 'absolute', top: '3vh' }}>
            <div style={{ display: 'flex', color: 'white', fontWeight: '700', alignItems: 'center' }}>
                <div onClick={() => { navigate(-1) }}>
                    <img src={arrowIMG} style={{ width: '8vw', transform: 'translateY(5%)' }} />
                </div>
                <p style={{ margin: '0 0 0 10px' }}>{pagename}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {user.profile_image ? <img src={user.profile_image} style={{ width: '8vw', borderRadius: '50%' }} />
                    : <img src={anonymousIMG} style={{ width: '8vw', marginRight: '10px' }} />}
            </div>
        </div>
    )
}

export default Topbar;