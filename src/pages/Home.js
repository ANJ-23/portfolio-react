import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
// import Fade from 'react-bootstrap/Fade';

function Home(props) {

    return (
        <Container className="main-sect">
            <Row>
                <Col xs lg="3" style={{textAlign:"center", paddingBottom:"20px"}} className='main-left-anim'>
                    {/* <Fade appear="true"> */}
                        <Image src={require("../assets/images/me_1.jpg")} width="190px" alt='Picture of me #1' />
                    {/* </Fade> */}
                    
                </Col>

                {/* <Col xs lg="2">
                    <h3>Click on the nav links above!</h3>
                </Col> */}

                <Col xs lg="9" className='main-right-anim'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
        </Container> 
    )
}

export default Home