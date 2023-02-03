import Carousel from 'react-bootstrap/Carousel';
import voiture1 from '../images/image.png';
function Photos(props) {
    var data = props.value;
    if(data.length>0){
        return (
            <div class='photos'>
                <Carousel>
                    {data.map( data =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={data}
                            alt="First slide"
                        />
                    </Carousel.Item>
                        )}
                </Carousel>
            </div>
        );
    }else{
        return (
            <div class='photos'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={voiture1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Photos;