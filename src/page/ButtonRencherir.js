import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import Login from './Login';
import React,{ useState } from 'react';
import Rencherir from '../service/Rencherir';
import { useNavigate } from 'react-router-dom';
import { isDisable } from '../service/liste';
 function ButtonRencherir(props){
    const nav = useNavigate();
    const [show, setShow] = useState(false);
  const handleClose = () =>{
    setShow(false);
    if(props.back == "fiche"){
        nav('/acceuil');
    }else{
        nav('/fiche/'+props.value.id_enchere);
    }
    console.log(props.back);
  } 
  const handleShow = () => setShow(true);
  const [element,setElement] = useState();
  
  if(isDisable(props.value.date_fin) == false){
    return(
        <>
        <Button onClick={()=>{
            if(localStorage.getItem("token") != null){
               //nav("/rencherir/"+props.value); 
               setElement(<Rencherir value={props.value.id_enchere}/>) ;
               handleShow();
            }else{
               /// setElement(<Login value={props.value}/>);
                nav('/login/'+props.value.id_enchere);
            }
        }} variant="info" size="lg" style={{letterSpacing:'2px', fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>rencherir</Button> 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <span style={{textalign:"center",fontweight:"bolder"}}>{props.value.categorie}</span>: <span>{props.value.prix_courant} Ar</span>
        </Modal.Header>
        <Modal.Body>{element}</Modal.Body>
      </Modal>
        </>
     );
  }else{
    return(
        <>
        <Button disabled variant="info" size="lg" style={{letterSpacing:'2px', fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>rencherir</Button> 
        </>
     );
  }
}
export default ButtonRencherir;