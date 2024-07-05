import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
 
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: 100px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
   color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
 <>
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3" >
        <span>Hi, I am</span>  
          <br />
          <span>
            <strong style={{color: "#e366fc"}}>Md.Anik Khan</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["React Js Developer","Frontend Developer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>

     
      </div>
    
    </div>
  </MyTitleMessage>
    
 </>
);

export default TitleMessage;
