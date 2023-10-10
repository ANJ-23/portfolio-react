import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation(props) {
    // const [currentPage, setCurrentPage] = useState("home")

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={()=>props.setCurrentPage("home")} href="">Andrew's Sample Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 me-auto">
                        <Nav.Link onClick={()=>props.setCurrentPage("home")} href="">Home</Nav.Link>
                        {/* <Nav.Link onClick={()=>props.setCurrentPage("about")} href="" >About</Nav.Link> */}
                        <Nav.Link onClick={()=>props.setCurrentPage("portfolio")} href="">Portfolio</Nav.Link>
                        <Nav.Link onClick={()=>props.setCurrentPage("resume")} href="">Resume</Nav.Link>

                        {/* WILL IMPLEMENT (dummy) CONTACT PAGE LATER */}
                        {/* <Nav.Link onClick={()=>props.setCurrentPage("contact")} href="" style={{fontSize:"22px", color:"white"}}>Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation