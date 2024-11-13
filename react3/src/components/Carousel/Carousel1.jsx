import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../assets/Img/carousel1.jpg'
import carousel2 from '../../assets/Img/carousel2.jpg'
import './Carousel1.css'

function Carousel1() {
  return (
    <div className='carouselcont'>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img className= "d-block w-100" src={carousel1} alt="" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img  className= "d-block w-100"  src={carousel2} alt="" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      

    </Carousel>
    </div>
  );
}

export default Carousel1;