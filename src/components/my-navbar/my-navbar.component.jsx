import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/Untitled-13.jpg";
import "./my-navbar.styles.css";
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";

import { BsArrowDownCircle } from "react-icons/bs";

const MyNavbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MD_ANIK_KHAN_CV.pdf"; // Replace with the actual path to your CV file
    link.download = "MD_ANIK_KHAN_CV.pdf"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo rounded-circle" style={{width:'40px'}} src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto "> 
              <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        {/* <Nav.Link href="#experience">Experiences</Nav.Link> */}
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        {/* <a href="https://drive.google.com/file/d/1-SSF9eE6R83U1W3p9pz2PsRdgJLDK4NJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a> */}
                       <Button 
              onClick={handleDownload} 
              style={{
                background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
                border: "none",
                padding: "10px 20px",
                color: "#fff",
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => e.target.style.background = "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)"}
              onMouseLeave={(e) => e.target.style.background = "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)"}
            >
             <BsArrowDownCircle
                style={{ width: "16px", height: "16px", margin: "0 10px" }}
              />  Download CV
            </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
