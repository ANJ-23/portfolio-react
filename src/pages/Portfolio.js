import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Portfolio(props) {

    return (
        <Container className="resume">
            <Row style={{marginBottom:"20px"}}>
                {/* Weather Dashboard (Module 6 - APIs, jQuery, Bootstrap) */}
                <Col>
                    <a href='https://anj-23.github.io/weather-dashboard/' target='_blank'>
                        <img src="./assets/images/port_1.jpg" width="380" height="214" />
                        <h4>Weather Dashboard</h4>
                    </a>
                </Col>

                {/* Social Network API (Module 18 - Mongoose/MongoDB) */}
                <Col>
                    <a href='https://github.com/ANJ-23/social-network-api' target='_blank' >
                        <img src="./assets/images/port_2.jpg" width="380" height="214" />
                        <h4>Social Network API</h4>
                    </a>
                </Col>

                {/* Password Generator (Module 3 - Front-end JavaScript) */}
                <Col>
                    <a href='https://anj-23.github.io/password-generator/' target='_blank'>
                        <img src="./assets/images/port_3.jpg" width="380" height="214" />
                        <h4>Password Generator</h4>
                    </a>
                </Col>
            </Row>

            <Row>
                {/* E-Commerce Tracker (Module 13 - MySQL, Express.js, Sequelize ) */}
                <Col>
                    <a href='https://github.com/ANJ-23/e-commerce-tracker' target='_blank'>
                        <img src="./assets/images/port_4.jpg" width="380" height="214" />
                        <h4>E-Commerce Tracker</h4>
                    </a>
                </Col>

                {/* README Generator (Module 9 - Node.js, Back-end JavaScript) */}
                <Col>
                    <a href='https://anj-23.github.io/password-generator/' target='_blank'>
                        <img src="./assets/images/port_5.jpg" width="380" height="214" />
                        <h4>README Generator</h4>
                    </a>
                </Col>

                {/* Web API Quiz (Module 4 - Front-end JavaScript) */}
                <Col>
                    <a href='https://anj-23.github.io/web-api-quiz/'  target='_blank'>
                        <img src="./assets/images/port_6.jpg" width="380" height="214" />
                        <h4>Web API Quiz</h4>
                    </a>
                </Col>
            </Row>
        </Container> 
    )
}

{/* <section>
    <h1>Portfolio</h1>

    {props.sectionsToShow.includes("adwork") && (
        <div>
            <p>adwork goes here</p>
        </div>
    )}

    {props.sectionsToShow.includes("directmail") && (
        <div>
            <p>direct mail link goes here</p>
        </div>
    )}
</section> */}

export default Portfolio