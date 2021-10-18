import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
  import imgurl from '../assets/images/imgUrl';


const Activate = () => {
   
    
    return (
        <div>
            <div>
              <Navbar className="navbg" expand="lg">
                <Navbar.Brand href="#home"><img className="endLogo" src={imgurl.endlogo.default}/>Smart Setup</Navbar.Brand>
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
            <div  className="mainContentLogin pt-5">
                    <div className="activatemain">
                        <div className="activatecontent">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Token</Form.Label>
                                <Form.Control type="text" placeholder="Enter Token" />
                            </Form.Group>
                            <div className="activate">
                                <Button className="activatebtn" variant="primary" type="submit">
                                    Activate
                                </Button>
                            </div>
                            
                            </Form>
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

export default Activate;