import Photos from './Photos';
import  Button  from 'react-bootstrap/Button';
import Profile from './Profile';
import iconImage from '../images/icon-prixs.png';
import ButtonRencherir from './ButtonRencherir';
import {useNavigate}from 'react-router-dom';
import { TempsRestant } from '../service/liste';
function EnchereMini(props){
    const nav = useNavigate();
    var date = TempsRestant(props.value.date_fin);
    var b = "hhhh";
    return(
        <div class='ivelany'>
            <div  onClick={()=>{nav('/fiche/'+props.value.id_enchere)}}>
            <Profile value={props.value.owner}/>
            <Photos value={props.value.photos}/>
            <div class='categorie'>{props.value.categorie}</div>   
            <div class='argent'><div class='centre'><img src={iconImage} alt="Avatar" class="icon-prix"/>{props.value.prix_courant} ar</div></div>
            <div class='temps'>{date}</div>
            </div>
            <div class='button-rencherir'>
            <div className="d-grid gap-1"><ButtonRencherir value={props.value} back={b}/></div>
            </div>    
        </div>   
    );
}
export default EnchereMini;