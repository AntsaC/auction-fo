import { Container, Row, Col,Button } from 'react-bootstrap';
import Enchere from './Enchere';
import React, { useEffect, useState } from 'react';
import { ArrowBarUp, ArrowRight,Search } from 'react-bootstrap-icons'
import { ListeEnchere, RechercheDynam } from '../service/liste';
import Recherche from './Recherche';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import Deconnect from './Deconnect';
import Loading from './Loading';
function AcceuilEnchere() {
  var rep = localStorage.getItem('search');
  if (rep == null) {
    rep = "";
  }
  var nav = useNavigate();
  const [data,setData] = useState();
  useEffect(function(){
    ListeEnchere(rep).then(function(response){
      setData(response.data.data);
    }).catch(function(error){
      console.log(error);
    })
  },[]);
  const [isOpened, setIsOpened] = useState(true);
  const [element,setElement] = useState(<p></p>);
  const deconn = () =>{
    if(localStorage.getItem("token") != null){
      return(
        <div class="header-profile" onClick={()=>{
          localStorage.clear();
          alert("vous ete deconnecte");
          nav("/acceuil");
      }}><Button variant="outline-danger">Deconnect</Button> </div>);
    }
  }
  if (data != null) {
    return (
      <div className="myApp">
        <div className="header">
          <div class="header-header">
            <div className="icon" onClick={() => setIsOpened(!isOpened)}>
              {isOpened ? <Search /> : <Search />}
            </div>
            <div class="header-title" onClick={() => { localStorage.setItem("search", ""); nav("/acceuil"); }}>List Enchere</div>
            {deconn()}
          </div>
        </div>
        <div className="content">
          <aside className={`${isOpened ? "opened" : ""} drawer`}><Recherche /></aside>
          <main className={`${isOpened ? "openedmain" : ""} main`}>
            <Enchere liste={data} />
          </main>
        </div>

      </div>
    );
  } else {
    return(
      <Loading/>
    );
  }
}
export default AcceuilEnchere;