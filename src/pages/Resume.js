import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Resume() {

    return (
        <Container className="port-res">
            <Row className="justify-content-md-center">
                <Col  >
                    <a href='./assets/Andrew_Joo_Resume.pdf' download>
                        <h2>Download my resume!</h2>
                    </a>
                </Col>
            </Row>

            <Row className="fade-in-delayed">
                <Col style={{marginTop:"10px", textAlign:"center"}}>
                    <h3>Front End</h3>
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
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Apollo</li>
                        <li>Sequelize.js</li>
                        <li>Heroku</li>
                        <li>Git</li>
                    </ul>
                </Col>
            </Row>
        </Container> 
    )
}

export default Resume