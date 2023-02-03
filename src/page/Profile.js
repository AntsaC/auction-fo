import avatar from './../images/avatar.jpg';
import './css/profile.css';
function Profile(props){
    return(
        <div class='profile-mere'>
            <img src={avatar} alt="Avatar" class="avatar"/>
            <div class='username'>{props.value}</div>
        </div>
        
    );
}
export default Profile;