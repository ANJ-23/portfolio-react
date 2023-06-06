import {useState, useEffect} from "react"
import {createContext} from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

/* 
TO-DO:
- implement custom light & dark modes (variables in React, custom classes with custom colors, button to switch themes)
- implement useContext somewhere in my portfolio?
*/

function Navigation(props) {
    // const [currentPage, setCurrentPage] = useState("home")


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{fontSize:"36px"}}>Andrew's Sample Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>props.setCurrentPage("home")} href="" style={{fontSize:"22px"}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>props.setCurrentPage("about")} href="" style={{fontSize:"22px"}}>About</Nav.Link>
                        <Nav.Link onClick={()=>props.setCurrentPage("portfolio")} href="" style={{fontSize:"22px"}}>Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}

                
                
               
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 me-auto">
                        <Nav.Link onClick={()=>props.setCurrentPage("home")} href="" style={{fontSize:"22px", color:"white"}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>props.setCurrentPage("about")} href="" style={{fontSize:"22px", color:"white"}}>About</Nav.Link>
                        <Nav.Link onClick={()=>props.setCurrentPage("portfolio")} href="" style={{fontSize:"22px", color:"white"}}>Portfolio</Nav.Link>
                        <Nav.Link onClick={()=>props.setCurrentPage("resume")} href="" style={{fontSize:"22px", color:"white"}}>Resume</Nav.Link>

                        {/* WILL IMPLEMENT (dummy) CONTACT PAGE LATER */}
                        {/* <Nav.Link onClick={()=>props.setCurrentPage("contact")} href="" style={{fontSize:"22px", color:"white"}}>Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

      /* <nav>
            <h3 onClick={()=>props.setCurrentPage("home")}>Andrew's Sample Site</h3>
            <a onClick={()=>props.setCurrentPage("home")}>Home</a>
            <a onClick={()=>props.setCurrentPage("about")}>About</a>
            <a onClick={()=>props.setCurrentPage("portfolio")}>Portfolio</a>
        </nav> */
    )
}

export default Navigation