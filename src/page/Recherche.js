import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate }from 'react-router-dom';
import { url } from '../service/common';
import { RechercheDynam } from '../service/liste';
import './css/recherche.css';
function Recherche(){
    var desc = useRef();
    var prixMin = useRef();
    var prixMax = useRef();
    const use = useNavigate();
    const submit = () => {
      var min = prixMin.current.value;
      var max = prixMax.current.value;
      var descri = desc.current.value;
      if(min == ''){
        min = "0";
      }
      if(max==''){
        max ="0";
      }
      localStorage.setItem('search',"?desc="+descri+"&prixMin="+min+"&prixMax="+max);
      use("/acceuil");
    }
   return(
    <div className='search'>
        <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" ref={desc}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prix Minimum</Form.Label>
        <Form.Control type="number" placeholder="prix min" ref={prixMin} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prix Maximum</Form.Label>
        <Form.Control type="number" placeholder="prix max" ref={prixMax}/>
      </Form.Group>
      <div className="d-grid gap-1"><Button variant="dark" type="submit">
        Recherche
      </Button></div>
    </Form>
    </div>
    
   );
}
export default Recherche;