import Carousel from 'react-bootstrap/Carousel';
import CvWrapper from "./CvWrapper";
import GithubWrapper from "./GithubWrapper";
import 'bootstrap/dist/css/bootstrap.css';
import "../style/CarouselStyle.css"

export default function CarouselWrapper() {
    return (
        <Carousel fade wrap controls>
            <Carousel.Item interval={3000} className="carouselItem">
                <CvWrapper/>
                <Carousel.Caption>
                    <p className="carouselInfoText">Have a look at my CV</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="carouselItem">
                <GithubWrapper/>
                <Carousel.Caption>
                    <p className="carouselInfoText">Have a look at my Github</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
