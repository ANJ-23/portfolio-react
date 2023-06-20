import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Resume() {

    return (
        <Container className="resume">
            <Row className="justify-content-md-center">
                <Col sm="3" >
                    <a href='./assets/AndrewJoo_Resume.pdf' download>
                        <h2 href='./assets/AndrewJoo_Resume.pdf' download>Download my resume!</h2>
                    </a>
                </Col>
            </Row>

            <Row >
                <Col style={{marginTop:"10px", textAlign:"center"}}>
                    <h3>Front End</h3>
                    {/* <p>React</p>
                    <p>JavaScript</p>
                    <p></p>
                    <p></p> */}
                    <ul style={{listStyleType:"none", display:"inline-block", textAlign:"left", marginRight:"24px"}} >
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </Col>
                    
                <Col style={{marginTop:"10px", textAlign:"center"}}>
                    <h3>Back End</h3>
                    <ul style={{listStyleType:"none", display:"inline-block", textAlign:"left", marginRight:"24px"}} >
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>API fetch</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Apollo</li>
                    </ul>
                </Col>
            </Row>
        </Container> 
    )
}

export default Resume