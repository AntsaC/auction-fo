import {useNavigate, useParams} from 'react-router-dom';
import { Container ,Row,Col,Button} from 'react-bootstrap';
import Enchere from './Enchere';
import './css/Fiche.css';
import React,{useEffect, useState} from 'react';
import { ArrowBarUp, ArrowRight, Search } from 'react-bootstrap-icons'
import { Detail, ListeEnchere,RechercheDynam, TempsRestant } from '../service/liste';
import Recherche from './Recherche';
import Profile from './Profile';
import Photos from './Photos';
import iconImage from '../images/icon-prixs.png';
import ButtonRencherir from './ButtonRencherir';
import Loading from './Loading';
function Fiche(){
    var {id} = useParams();
    const [data,setData] = useState();
    useEffect(function(){
      Detail(id).then(function(response){
        setData(response.data.data);
      }).catch(function(error){
        console.log(error);
      })
    },[]);
    const [isOpened, setIsOpened] = useState(true);
    var nav = useNavigate();
    const deconn = () =>{
      if(localStorage.getItem("token") != null){
        return(
          <div class="header-profile" onClick={()=>{
            localStorage.clear();
            alert("vous ete deconnecte");
            nav("/acceuil");
        }}><Button variant="outline-danger">Deconnect</Button></div>);
      }
    }
  if(data != null){
    var date = TempsRestant(data.date_fin);
    return (
      <div className="myApp">
        <div className="header">
          <div class="header-header">
            <div className="icon" onClick={() => setIsOpened(!isOpened)}>
              {isOpened ? <Search /> : <Search />}
            </div>
            <div class="header-title" onClick={() => { localStorage.setItem("search", ""); 
            nav("/acceuil?"); }}>List Enchere</div>
          {deconn()}
          </div>

        </div>
        <div className="content">
          <aside className={`${isOpened ? "opened" : ""} drawer`}><Recherche/></aside>
          <main className={`${isOpened ? "openedmain" : ""} main`}>
            <Container>
                <Row>
                    <Col sm={4}><div className="detailG"><Profile value={data.owner}/> <Photos value={data.photos}/></div></Col>
                    <Col sm={6}>
                        <div className='detailCat'>categorie: {data.categorie}</div>
                        <div className='detailDesc'>{data.description}</div>
                        <div class='detailPrix'><div class='argent'><img src={iconImage} alt="Avatar" class="icon-prix2"/>{data.prix_courant} ar</div></div>
                        <div class='temp'>{date}</div>
                        <div class='button-rencherir'>
                        <div className="d-grid gap-1"><ButtonRencherir value={data} back="fiche"/></div>
                        </div>  
                    </Col>
                </Row>
            </Container>
          </main>
        </div>
      </div>
    );
  }else{
    return(
      <Loading/>
    );
    
  }
}
export default Fiche;