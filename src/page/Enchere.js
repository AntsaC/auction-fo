import { Container, Row, Col } from 'react-bootstrap';
import EnchereMini from './EnchereMini';
import { useNavigate } from 'react-router-dom';
function Enchere(props) {

  return (
    <Container  class='container-Enchere'>
      <div class='Header-H1'>Enchere en Cours</div>
      <Row>
        {props.liste.map( data =>
          <Col sm={3} ><EnchereMini  value={data}/></Col>
          )}
      </Row>
    </Container>
  );
}
export default Enchere;