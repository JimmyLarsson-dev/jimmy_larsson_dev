import githubImage from "../assets/images/githubLinkImage.png";
import "../style/CarouselStyle.css"

export default function GithubWrapper() {
    return(
        <div>
            <img className="carouselImage" src={githubImage} alt="Link to CV"/>
        </div>
    )
}
