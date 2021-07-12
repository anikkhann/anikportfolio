import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/Untitled-13.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>

            {/* About me description */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                {/* description */}
                Hello there! I am <strong style={{color:'green'}}>&nbsp;Md.Anik Khan</strong>
                
                <br />A passionate Software Quality Assurance, programmer and alongside a high interest in Manual Testing, Automation Testing, and Front-End Web Development with React.js, Node.js, Express.js and MongoDB. <br/>
                Born and brought up in Bangladesh. 
               
                <br />
                I would like to work for  a challenging position for long term careers goal in aspect of Private Sectors or related jobs and achieving a dynamic job to utilize my academic background, potentiality and knowledge for the interest of the company as well as my career to get respectable and responsible position in the related field. 
                <br />
               
                <br /> <br />
                
              </Row>
              <Row>
                {/* buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1CdMBCcfsA90qSNqAESA_56iE-TVTqj7j/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/anikkhann" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/anik-khan/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
