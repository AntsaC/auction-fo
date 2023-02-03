import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rencherissement } from "./liste";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Rencherir(props) {
    var { id } = useParams();
    if (props.value != null) {
        id = props.value;
    }
    var token = JSON.parse(localStorage.getItem("token"));
    var prix = useRef();
    const [is, setIs] = useState();
    var navigate = useNavigate();
    const rencher = () => {
        rencherissement({ enchere: { id: id }, prixEnchere: prix.current.value }, token.authId).then(function (response) {
            alert("rencherir succes");
            setIs(true);
        }).catch(function (error) {
            setIs(false)
            alert(error.response.data.error.message);
        });
    }
    if (is == true) {
        navigate('/fiche/' + id);
    }
    return (
        <div style={{ display: 'block', 
        padding: 30 }}>
            <Form>
                <Form.Group>
                    <Form.Control type="number" placeholder="Entre votre montant" ref={prix} />
                </Form.Group>
                <div className="d-grid gap-1" style={{ display: 'block', 
        padding: 30 }}>
                <Button variant="success" type="button" onClick={rencher}>valider</Button>
                </div>
                
            </Form>
        </div>
    );
}
export default Rencherir;