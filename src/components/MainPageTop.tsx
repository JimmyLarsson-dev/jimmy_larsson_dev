import "../style/mainPage.css"
import workTitle from "../assets/images/javaDeveloperFullstackDeveloper_withBlur.png"
import github from "../assets/images/githubLinkImage.png"
import cv from "../assets/images/cvLinkImage.png"
import {useState} from "react";

export default function MainPageTop() {

    return(
        <div className="mainPageTopContainer">
            <p className="headlineText">Jimmy Larsson</p>
            <p className="headlineText" id="subHeadlineText">Java developer, Fullstack developer</p>
        </div>
    )
}
