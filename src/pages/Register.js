import React from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Form from 'react-bootstrap/Form';
  import imgurl from '../assets/images/imgUrl';

const Register = () => {
   
    
    return (
        <div>
            <div>
              <Navbar className="navbg" expand="lg">
                <Navbar.Brand href="#home">
                <img className="endLogo" src={imgurl.endlogo.default}/>Smart Setup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto pr-4 mr-1">
                    <Nav.Link ><Link className="navLink" to="/">Login</Link></Nav.Link>
                    <Nav.Link ><Link className="navLink" to="/Register">Register</Link></Nav.Link>
                    <Nav.Link ><Link className="navLink" to="/Activate">Activate Account</Link></Nav.Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div  className="mainContentLogin pt-5 pb-5">
                <div className="registercontent">
                <div className="card-title"><h4>Register</h4></div>
                <div className="row content">
                       
                       <div className="col">
                       
                       <div className="card-content">
                            <div className="info info-horizontal">
                                <div className="icon icon-primary"><i className="fa fa-chart-line"></i></div>
                                <div className="description"><h4 className="info-title">Program Performance</h4>
                                <p className="description"> Real time indicators &amp; program performance for community centric intiatives. Configure program as you need. </p>
                                </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-info"><i className="fa fa-cog"></i></div>
                                    <div className="description"><h4 className="info-title">Smart Setup</h4>
                                    <p className="description"> Ready to use business templates on the cloud. </p>
                                    </div>
                                 </div>
                                </div>
                       </div>
                       <div className="col">
                       <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control type="text" placeholder="Organization Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Organization Type</Form.Label>
                            
                            <Form.Control as="select">
                            <option>--Select--</option>
                            <option>Government</option>
                            <option>NGO</option>
                            <option>Community Based Organisation (CBO)</option>
                            <option>Private Company</option>
                            <option>CSR organisation</option>
                            <option>WHO Country/Regional Office</option>
                            <option>Others</option>
                            </Form.Control>
                           
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your Mobile Number</Form.Label>
                            <Form.Control type="password" placeholder="Mobile Number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button className="regbtn"  type="submit">
                           Register
                        </Button>
                        </Form>
                       </div>
                   </div>
                </div>
                  
                   <div>
                  
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

export default Register;