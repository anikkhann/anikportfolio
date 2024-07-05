import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/Untitled-13.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import MyTitleMessage from "../../components/title-message/title-message.component";
import { BsArrowDownCircle } from "react-icons/bs";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MD_ANIK_KHAN_CV.pdf"; // Replace with the actual path to your CV file
    link.download = "MD_ANIK_KHAN_CV.pdf"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="about">
      <div className="about" style={{ margin: "6rem 0" }}>
        {/* <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1> */}

        <Container>
          <Row className="pt-3 pb-3 align-items-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row>
                <MyTitleMessage />
              </Row>
            </Col>
            
            <Col xs={12} md={6}>
              <Row className="justify-content-center mr-2">
                {/* <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                > */}
                  <Image
                    alt="profile"
                    src={Profile}
                    fluid
                    style={{
                      width: "50%",
                      height: "50%",

                      objectFit: "cover",
                    }}
                  />
                {/* </div> */}
                {/* <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                  roundedCircle
                  style={{ width: '200px', height: '200px' }}
                /> */}
              </Row>
            </Col>

          

            {/* About me description */}
          </Row>
          <Row className="justify-content-center mt-3">
         

            <Button 
              onClick={handleDownload} 
              style={{
                background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
                border: "none",
                padding: "10px 20px",
                color: "#fff",
                borderRadius: "30px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => e.target.style.background = "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)"}
              onMouseLeave={(e) => e.target.style.background = "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)"}
            >
             <BsArrowDownCircle
                style={{ width: "20px", height: "20px", margin: "0 10px" }}
              />  Download CV
            </Button>
          </Row>
          <Row>
            {/* buttons */}
            <Col className="d-flex justify-content-center flex-wrap py-5">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's talk
                  </Button>
                </a>
              </div>
            
              <div>
                <a
                  href="https://github.com/anikkhann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-dark">
                    GitHub
                  </Button>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/anik-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-info">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
