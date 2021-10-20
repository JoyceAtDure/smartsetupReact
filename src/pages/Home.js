import React from 'react';
import { Button, Card, Form, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import imgurl from '../assets/images/imgUrl';
// import Dashboard from './pages/Dashboard';
  import Register from './Register';
  import Activate from './Activate';

const Home = () => {
 
    return (
        <div>
            <div>
              <Navbar className="navbg" expand="lg">
                <Navbar.Brand href="#home">
                    <img className="endLogo" src={imgurl.endlogo.default}/>
                    <span className="ml-2">Smart-Setup</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ml-auto pr-4 mr-1">
                   
                    <Nav.Link ><Link className="navLink" to="/">Login</Link></Nav.Link>
                    <Nav.Link ><Link className="navLink" to="/Register">Register</Link></Nav.Link>
                    <Nav.Link ><Link className="navLink" to="/Activate">Activate Account</Link></Nav.Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div  className="mainContentLogin">
                    <div className="row pt-5 pl-5 pr-5 maincontent">
                        <div className="col-8">
                            <p className="descmessage"> This is the first step for adapting the Global Prevent TB platform to country specific need. The user would need a one-time registration on the smart-set-up. Once the users have successfully registered, they will get access to the smart set-up where they can create a program, configure registration and service forms, alerts, dashboard indicators and publish. The user can also upload index cases for which contact investigation is needed, manage user groups and facility and even print QR coded cards. </p>

                          <Button className="downloadbtn" variant="light" >
                              <i class="fab fa-youtube pr-2"></i>
                          Training Video</Button>
                          <Button className="downloadbtn ml-4" variant="light"> <i class="fas fa-book pr-2"></i>Training Manual</Button>
                        </div>
                       
                        <div className="col-4">
                            <Card className="loginCard">
                             <Card.Header className="card-header">
                                 <span>Login Form</span>
                             </Card.Header>
                             <Card.Body className="card-body">
                                <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="label">Username</Form.Label>
                                    <div className="formgroup">
                                        <span className="input-group-addon">
                                          <i class="far fa-user-circle"></i>
                                        </span>
                                        <span className="formInput">
                                        <Form.Control className="formin" type="email" placeholder="Enter username" />
                                            </span>
                                    </div>
                                    
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="label">Password</Form.Label>
                                    <div className="formgroup">
                                        <span className="input-group-addon"><i class="fas fa-fingerprint"></i></span>
                                        <span className="formInput"> <Form.Control className="formin" type="password" placeholder="Enter password" /></span>
                                    </div>
                                   
                                </Form.Group>
                                
                                <Button className="loginBtn" variant="primary" type="submit">
                                <Link  to="/Dashboard"> Log me in</Link>
                                   
                                </Button>
                                <div>
                                    <Button className="forgotbtn" type="submit">
                                    Forgot Password
                                    </Button>
                                </div>
                                
                                </Form>
                             </Card.Body>
                            </Card>
                           
                           
                          
                        </div>
                    </div>
            </div>
            <div className="footer">
                <div className="row">
                    <div className="col-6">
                       <p className="footext">Powered by  <img className="fooimg" src={imgurl.durelogo.default}/></p>  </div>
                    <div className="col-6">
                       <div class="widthMaxContent ml-auto pt-2">
                           <p className="footextcopy">Copyright © 2020. All rights reserved</p></div>
                    </div>
                </div>
            </div>

        </div>
        
       
    );


};

export default Home;