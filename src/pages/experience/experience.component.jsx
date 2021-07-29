import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

//skills learned
// import L_HTML5 from "../../assets/img/skills/html-5.svg";
// import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
// import L_REACT from "../../assets/img/skills/react.svg";
// import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
// import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
// import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
// import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_GIT from "../../assets/img/skills/git-icon.svg";
// import L_HEROKU from "../../assets/img/skills/heroku.svg";
// import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
// import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
// import L_CPROGRAMMING from "../../assets/img/skills/c_pro.svg";
// import L_MONGODB from "../../assets/img/skills/MongoDB-Emblem.svg";
// import L_FIREBASE from "../../assets/img/skills/firebase2_.svg";
// // import L_NETLIFY from "../../assets/img/skills/Netlify.svg";
// import { Image } from 'react-bootstrap';

const Experience = () => {
  return (
    <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCES & TRAINING COURSES</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                {/* <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
                {/* </Card.Header>  */}
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title style={{color:'orange',fontWeight:'900',fontSize:'30px'}} className="text-center">Designation: Frontend Developer & Manual Tester</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style "></strong>
                      <br />
                      <strong style={{color:'green'}}>Company Name:</strong> Softify Digital <br />
                      <strong style={{color:'green'}}>Start & End Date:</strong> January(2021) - June(2021)<br />
                      <strong style={{color:'green'}}>Course Name:</strong> Software Quality Assurance(Automation) <br />
                      <strong style={{color:'green'}}>Institute Name:</strong> Udemy <br />
                      <strong style={{color:'green'}}>Certificate Link:</strong>Training in Progress <br />
                      <strong style={{color:'green'}}>Course Name:</strong> Web Development <br />
                      <strong style={{color:'green'}}>Institute Name:</strong> Programming Hero <br />
                      <strong style={{color:'green'}}>Certificate Link: </strong><a href="https://drive.google.com/file/d/18okDd-hBr1BfjcfdqHEG8Wy5jix4gTXB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Web Development</a><br/>
                      <strong style={{color:'green'}}>Duration:</strong> 6 Month
                      {/* <br />
                      <strong style={{color:'green'}}>Technology Learned:</strong> <br/>
                      
                      
                            <span className="p-2">
                              <Image src={L_CPROGRAMMING} alt="C Programming" rounded className="image-style1 m-1"></Image> C Programming
                            </span>
                         
                          
                       
                            <span className="p-2">
                              <Image src={L_JAVASCRIPT} alt="React" rounded className="image-style1 m-1"></Image> JavaScript
                            </span>
                        
                        
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React.js
                            </span>
                        
                      
                        
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node" rounded className="image-style m-1"></Image> Node.js
                            </span>
                          
                          
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style m-1"></Image> Express.js
                            </span>
                        
                        
                            <span className="p-2">
                              <Image src={L_MONGODB} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          
                          
                            <span className="p-2">
                              <Image src={L_REACT_BOOTSTRAP} alt="React-Bootstrap" rounded className="image-style1 m-1"></Image> React-Bootstrap
                            </span>
                          
                          
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP} alt="Bootstrap" rounded className="image-style1 m-1"></Image> Bootstrap
                            </span>
                          
                          
                            <span className="p-2">
                              <Image src={L_REACT_ROUTER} alt="React-Router" rounded className="image-style1 m-1"></Image> React-Router
                            </span>
                          
                          
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          
                          
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                        
                            
                    
                            <span className="p-2">
                              <Image src={L_GIT} alt="Github API" rounded className="image-style1 m-1"></Image> REST API
                            </span>
                        
                          
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                        
                          
                            <span className="p-2">
                              <Image src={L_HEROKU} alt="Heroku" rounded className="image-style1 m-1"></Image> Heroku
                            </span>
                        
                          
                            <span className="p-2">
                              <Image src={L_MATERIALUI} alt="Material UI" rounded className="image-style1 m-1"></Image> Material UI
                            </span>
                      
                        
                            <span className="p-2">
                              <Image src={L_GITHUB_PAGES} alt="Github Pages" rounded className="image-style1 m-1"></Image> Github Pages
                            </span>
                          
                        
                            <span className="p-2">
                              <Image src={L_NETLIFY} alt="Material UI" rounded className="image-style1 m-1"></Image> Netlify
                            </span>
                        
                           */}
                          
                          
                         
                        
                      <br />
                    
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
  );
};

export default Experience;
