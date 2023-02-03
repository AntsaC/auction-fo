import { ArrowBarUp, ArrowRight, GearWideConnected } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom';
function Deconnect() {
    const nav = useNavigate();
    return (
        <div class="header-profile" onClick={()=>{
            localStorage.clear();
            nav("/acceuil");
        }}>
        
        </div>);
}
export default Deconnect;