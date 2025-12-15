import Carousel from 'react-bootstrap/Carousel';

function Cour() {
  return (
    <div>
      <Carousel controls={false}>
        
        <Carousel.Item interval={5000}>
            <video className="d-block w-100"
            autoPlay
            loop
            playsInline>
            <source src="https://www.ugc.gov.in/Content/images/slider/video_slider.mp4"/>
          </video>
          
          
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.ugc.gov.in/Content/images/slider/main-slider2.png"
            alt="Second slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.ugc.gov.in/Content/images/slider/main-slider3.png"
            alt="First slide"
          />
          
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Cour;
