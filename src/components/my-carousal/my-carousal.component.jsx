import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";
import { BsArrowDownCircle } from "react-icons/bs";
const MyCarousal = () => {
  return (
    <div id="home">
       <div className="main text-center mt-3" style={{cursor:"pointer"}}>
     <a
       href="/path/to/your/CV.pdf"
       download="Md_Anik_Khan_CV.pdf"
       className="download-btn"
     >
       
       <BsArrowDownCircle style={{ marginRight: '10px', cursor:"pointer" }}/>
       Download CV
     </a>
   </div>
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel> 
      
      <ScrollDown />
     
    </div>
  );
};

export default MyCarousal;
