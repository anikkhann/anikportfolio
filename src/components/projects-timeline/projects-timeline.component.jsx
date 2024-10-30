import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Image from "react-bootstrap/Image";
// projects
import L_CreativeAgency from "../../assets/img/projects/creative.webp";
import L_Durjoy from "../../assets/img/projects/durjoy.png";
import L_Booking from "../../assets/img/projects/booking.png";
import L_TravelGuru from "../../assets/img/projects/travel.webp";
import L_VolunteerNetwork from "../../assets/img/projects/volunteer.webp";
import L_AppartmentHunt from "../../assets/img/projects/appartment.webp";
import L_EduTech from "../../assets/img/projects/edutech.webp";
import L_Workuit from "../../assets/img/projects/workuit.png";
import L_HRM from "../../assets/img/projects/hrm.png";
import L_EDU from "../../assets/img/projects/edutube.png";
import L_SQU from "../../assets/img/projects/square.png";
import L_SELF from "../../assets/img/projects/selfcare.png";
import L_HSQ from "../../assets/img/projects/homesq.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
// import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
// import L_CPROGRAMMING from "../../assets/img/skills/c_pro.svg";
import L_MONGODB from "../../assets/img/skills/MongoDB-Emblem.svg";
import L_FIREBASE from "../../assets/img/skills/firebase2_.svg";
// import L_NETLIFY from "../../assets/img/skills/Netlify.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* ISP Billing */}
          <ImageEvent
            className="text-center"
            text="ISP Billing Dashboard"
            src={L_Durjoy}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        This application is designed and developed to help ISPs
                        manage, monitor, and deliver internet services to their
                        customers effectively. Some of the main key features
                        are,
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Authentication and Security</li>
                          <li>Customer Management</li>
                          <li>Billing and Accounting</li>
                          <li>Complaint Management</li>
                          <li>Device Management</li>
                          <li>Customer Care</li>
                          <li>Notification Management</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Nex.js</span>
                          </li>
                          <li>
                            <span className="p-2">Node.js</span>
                          </li>
                          <li>
                            <span className="p-2">
                              React Query (State Management)
                            </span>
                          </li>
                          <li>
                            <span className="p-2">Ant Design</span>
                          </li>
                          <li>
                            <span className="p-2">Tailwind CSS</span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://demoisp.superbnexus.net:8080/admin"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Self Care */}
          <ImageEvent
            className="text-center"
            text="Customer Selfcare"
            src={L_SELF}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Developed Secure Customer Portal: Created a
                            login-protected customer portal allowing registered
                            users to access personalized account information and
                            manage their internet services securely.
                          </li>
                          <li>
                            Wallet and Balance Integration: Implemented a
                            digital wallet feature enabling users to view and
                            manage their current balance.
                          </li>
                          <li>
                            Internet Package Display: Designed an interface to
                            show users their active internet packages, data
                            limits, and total usage.
                          </li>
                          <li>
                            Payment History: Integrated a payment history
                            feature allowing users to view past transactions
                          </li>
                          <li>
                            Ticketing System for Issue Reporting: Developed a
                            ticketing system within the portal, allowing
                            customers to report internet issues.
                          </li>
                          <li>
                            Profile Management: Enabled users to update personal
                            information, providing a user-friendly interface for
                            profile management.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Nex.js</span>
                          </li>
                          <li>
                            <span className="p-2">Node.js</span>
                          </li>
                          <li>
                            <span className="p-2">
                              React Query (State Management)
                            </span>
                          </li>
                          <li>
                            <span className="p-2">Ant Design</span>
                          </li>
                          <li>
                            <span className="p-2">Tailwind CSS</span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://myportal.superbnexus.net:8081/login"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Booking */}
          <ImageEvent
            className="text-center"
            text="SquareFeet Booking"
            src={L_Booking}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Developed User Booking Platform: Built an
                            interactive booking website enabling users to select
                            and book slots at various locations connected to the
                            SquareFeet network.
                          </li>
                          <li>
                            Search and Filter Functionality: Integrated a robust
                            search and filter system, allowing users to find
                            booking locations by place name, category, and date,
                            enhancing user experience.
                          </li>
                          <li>
                            Popular Booking Highlights: Created a "Popular
                            Booking" section showcasing frequently booked
                            locations to drive engagement and assist users in
                            discovering trending options.
                          </li>
                          <li>
                            User Registration and Authentication: Implemented a
                            secure registration and login system, ensuring only
                            registered users can access booking and payment
                            features.
                          </li>
                          <li>
                            Slot Availability and Pricing Display: Designed
                            dynamic interfaces to display available booking
                            slots, prices, and date-specific details,
                            streamlining the booking process for users.
                          </li>
                          <li>
                            Real-Time Booking System: Enabled users to view and
                            reserve available time slots in real-time, providing
                            a smooth and responsive booking experience
                          </li>
                          <li>
                            Payment Gateway Integration: Developed a payment
                            flow that connects to the AMAR PAYMENT system for
                            secure transactions, allowing users to complete
                            bookings and view transaction details.
                          </li>
                          <li>
                            Transaction History Tracking: Implemented an "AMAR
                            PAYMENT" menu for users to review past transaction
                            details, increasing transparency and user trust.
                          </li>
                          <li>
                            Mobile-Responsive Design: Created a fully responsive
                            design, ensuring an optimal booking experience on
                            both desktop and mobile devices.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Nex.js</span>
                          </li>
                          <li>
                            <span className="p-2">Node.js</span>
                          </li>
                          <li>
                            <span className="p-2">
                              React Query (State Management)
                            </span>
                          </li>
                          <li>
                            <span className="p-2">Ant Design</span>
                          </li>
                          <li>
                            <span className="p-2">Tailwind CSS</span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://booking.squarefeet.xyz/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* EDUTUBE */}
          <ImageEvent
            className="text-center"
            text="EduTube Video Application"
            src={L_EDU}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        EduTube application has various educational videos and
                        information about all those videos on its home page. At
                        the time users could learn skills by sorting and viewing
                        them and could create, update,and edit videos with
                        information.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            When the user lands on the EduTube website, the user
                            will be able to see all videos with some Tag
                            Categories and a search field for sorting videos.
                          </li>
                          <li>
                            If users want to see the videos according to their
                            search or tag category selection, they will be able
                            to see the filtered videos. Even if the user
                            searches and selects the tag category at a time, the
                            result will be shown according to seacrh and tag
                            selection.
                          </li>
                          <li>
                            Users can add any new video of their choice with
                            information on this EduTube website. They will be
                            able to see added video to Home Page.
                          </li>
                          <li>
                            By selecting a specific video, the user will see the
                            selected video dynamically on a single page along
                            with the related videos of the selected video.
                          </li>
                          <li>
                            By clicking the selected video or related video, the
                            user gets two options, one is EDIT and the other is
                            DELETE. When the user clicks on the update button,
                            an edit page will appear with all the previous
                            information of the selected video, from there the
                            user can update the video with the new information.
                            If the user wants to delete the selected video, by
                            clicking on the delete button the user will be able
                            to delete the selected video.
                          </li>
                          <li>
                            After video adding, deleting, and editing a new
                            video, the user will see all his updates on the
                            homepage
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">React.js</span>
                          </li>

                          <li>
                            <span className="p-2">
                              RTK Query (State Management)
                            </span>
                          </li>
                          <li>
                            <span className="p-2">React Router</span>
                          </li>
                          <li>
                            <span className="p-2">Tailwind CSS</span>
                          </li>

                          <li>
                            <span className="p-2">JSON Server API</span>
                          </li>

                          <li>
                            <span className="p-2">Vercel</span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://edu-tube-application.vercel.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://edu-tube-application.vercel.app/"
                  target="_blank"
                >
                  SOURCE CODE(Client)
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/EduTube-Server"
                  target="_blank"
                >
                  SOURCE CODE(Server)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Squarefeet */}
          {/* date="5/07/2021" */}
          <ImageEvent
            className="text-center"
            text="SquareFeet"
            src={L_SQU}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        SquareFeet is the first Bangladeshi community-based
                        property management platform, that wants to redefine the
                        concept of urban neighbourhood is SquareFeet. The
                        one-stop digital services for a building and community,
                        like - Accounting & Billing, Neighbours, NewsFeed,
                        Gatekeeper, Service Provider, Booking, Notice, Contract,
                        and Police Verification are altogether present here.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">React.js</span>
                          </li>

                          <li>
                            <span className="p-2">
                              RTK Query (State Management)
                            </span>
                          </li>
                          <li>
                            <span className="p-2">React Router</span>
                          </li>
                          <li>
                            <span className="p-2">Tailwind CSS</span>
                          </li>

                          <li>
                            <span className="p-2">
                              Rest API (Node, Express)
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://squarefeet.xyz/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* squarefeet admin panel */}
          <ImageEvent
            className="text-center"
            text="SquareFeet Admin Panel"
            src={L_HSQ}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                {/* <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><br/>
                        In this site only registered 
                        <hr />
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion> */}
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://myportal.superbnexus.net:8081/login"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Kington Global */}
          <ImageEvent
            className="text-center"
            text="Appartment Hunt"
            src={L_AppartmentHunt}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        With this app the user can view houses, add houses, see
                        list of booking and also can book houses.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This is a MERN-Stack website</li>
                          <li>
                            Available houses can be seen by users on the
                            homepage
                          </li>
                          <li>
                            New users need to sign up before logging in and can
                            be logged in via Google
                          </li>
                          <li>
                            User can see house details by clicking on view
                            details. <br /> After logging in, specific house
                            details will be displayed
                          </li>
                          <li>
                            The user will be able to book the house with their
                            details
                          </li>
                          <li>
                            Users can view all booking lists and rent houses
                          </li>
                          <li>User can add rent house</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React.js
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React-Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Bootstrap
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React-Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              REST API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://appartmenthunt.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/huntAppartmentClient"
                  target="_blank"
                >
                  SOURCE CODE(Client)
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/appartmentHuntServer"
                  target="_blank"
                >
                  SOURCE CODE(Server)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Apartment Hunt */}
          {/* <ImageEvent className="text-center" text="Appartment Hunt" src={L_AppartmentHunt} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><br/>
                        With this app the user can view houses, add houses, see list of booking and also can book houses. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This is a MERN-Stack website</li>
                          <li>Available houses can be seen by users on the homepage</li>
                          <li>New users need to sign up before logging in and can be logged in via Google</li>
                          <li>User can see house details by clicking on view details. <br/> After logging in, specific house details will be displayed</li>
                          <li>The user will be able to book the house with their details</li>
                          <li>Users can view all booking lists and rent houses</li>
                          <li>User can add rent house</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image src={L_JAVASCRIPT} alt="React" rounded className="image-style1 m-1"></Image> JavaScript
                            </span>
                          </li>
                        <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React.js
                            </span>
                          </li>
                      
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node" rounded className="image-style m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style m-1"></Image> Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_MONGODB} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT_BOOTSTRAP} alt="React-Bootstrap" rounded className="image-style1 m-1"></Image> React-Bootstrap
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT_ROUTER} alt="React-Router" rounded className="image-style1 m-1"></Image> React-Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                            
                        <li>
                            <span className="p-2">
                              <Image src={L_GIT} alt="Github API" rounded className="image-style1 m-1"></Image> REST API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HEROKU} alt="Heroku" rounded className="image-style1 m-1"></Image> Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://appartmenthunt.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/anikkhann/huntAppartmentClient" target="_blank">
                  SOURCE CODE(Client)
                </UrlButton>
                <UrlButton href="https://github.com/anikkhann/appartmentHuntServer" target="_blank">
                  SOURCE CODE(Server)
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent> */}

          {/* Project: Creative Agency */}
          <ImageEvent
            className="text-center"
            text="Creative Agency"
            src={L_CreativeAgency}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        With this app, people can order the product of their
                        choice The admin will do their job after seeing the
                        orders of the people
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            This project is a MERN-Stack Responsive website
                          </li>
                          <li>User and admin can login using their email</li>
                          <li>
                            After clicking on home page services user can order
                            product but user have to be login first
                          </li>
                          <li>
                            User can order product , see service list and put
                            review of their own
                          </li>
                          <li>
                            This project has Admin panel where admin can see all
                            the service list
                          </li>
                          <li>Admin can add service and can make an admin</li>
                          <li>
                            User reviews and services will showed into home page
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React.js
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React-Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React-Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              REST API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://creative-agency-af0f5.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/creative-agency"
                  target="_blank"
                >
                  SOURCE CODE(Client)
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/creative-agency-server"
                  target="_blank"
                >
                  SOURCE CODE(Server)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Travel Guru */}
          <ImageEvent
            className="text-center"
            text="Travel Guru"
            src={L_TravelGuru}
            alt="Smart Brain Face Detect"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        With this app, travel lovers can go anywhere in
                        Bangladesh and book the hotel of their choice
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            This project is made for travel lover peoples who
                            love to travel beautiful places like Sajekvely,
                            Sundarban, Cox’s Bazar, Sreemangal
                          </li>
                          <li>
                            User can click any favorite places cards. After
                            clicking the card user will go booking page
                          </li>
                          <li>
                            In the booking page user can see some history of the
                            place and user can book hotel by clicking start
                            booking button
                          </li>
                          <li>
                            After booking user can go to destination page.
                            Before going to destination page user have to log in
                            first
                          </li>
                          <li>
                            Users can sign up if users doesn’t have any account.
                            For this user have to give name, new email, new
                            password
                          </li>
                          <li>
                            If user already has password then have to give email
                            and password on the input box
                          </li>
                          <li>
                            User can also logged in by their Google account and
                            Facebook account After successful logged in user
                            will see the room details and map
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React-Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React-Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://travel-guru-de0f0.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/travel-guru"
                  target="_blank"
                >
                  SOURCE CODE(Client)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Volunteer NetWork */}

          <ImageEvent
            className="text-center"
            text="Volunteer NetWork"
            src={L_VolunteerNetwork}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br />
                        With this app the volunteer can register the work of his
                        choice and an admin can accept or reject his
                        registration.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            This project is a MERN-Stack Responsive website
                          </li>
                          <li>
                            In home page there are 20 different types of
                            volunteer activities available
                          </li>
                          <li>
                            User can register for any volunteer activities by
                            clicking on activity card
                          </li>
                          <li>
                            User can see what activities they were registered
                          </li>
                          <li>
                            User can delete their activities from the activity
                            list
                          </li>
                          <li>
                            Also included admin panel and admin can see all
                            users activities list
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React.js
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React-Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React-Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              REST API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://volunteer-network-46685.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/volunteer-network"
                  target="_blank"
                >
                  SOURCE CODE(Client)
                </UrlButton>
                <UrlButton
                  href="https://github.com/anikkhann/volunteer-network-server"
                  target="_blank"
                >
                  SOURCE CODE(Server)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* edutech-startup */}
          {/* <ImageEvent date="5/12/2020" className="text-center" text="Edutech-Startup" src={L_EduTech} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><br/>
                        This is a online based education platform website design
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This is a online based education platform website website</li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image src={L_JAVASCRIPT} alt="React" rounded className="image-style1 m-1"></Image> JavaScript
                            </span>
                          </li>
                        <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React.js
                            </span>
                          </li>
                      
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT_BOOTSTRAP} alt="React-Bootstrap" rounded className="image-style1 m-1"></Image> React-Bootstrap
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                            <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HEROKU} alt="Heroku" rounded className="image-style1 m-1"></Image> Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://edutech-startup-e8cc8.web.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/anikkhann/edutech-startup" target="_blank">
                  SOURCE CODE(Client)
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent> */}
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
