import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Portfolio(props) {

    
    return (
        <Container className="port-res fade-in-delayed">
            <Row>
                {/* JukeLink (back end; Music playlist concept) (Project 2) */}
                <Col>
                    <a href='https://music-favorites.herokuapp.com/' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/project_2.jpg")} className="portfolio-image" alt="JukeLink (Music playlist concept)" />
                        <h4>JukeLink (music playlists; back end)</h4>
                    </a>
                </Col>

                {/* Business Dashboard (Project 3) */}
                <Col>
                    <a href='https://github.com/JacobDNelsonStone/business-dashboard-react' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/project_3.jpg")} className="portfolio-image" alt="Business Dashboard" />
                        <h4>Business Dashboard</h4>
                    </a>
                </Col>
                
                {/* Shopping Demo (Front end) (Project 1) */}
                <Col>
                    <a href='https://moe1401.github.io/shopping-demo/' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/project_1.png")} className="portfolio-image" alt="Shopping Demo (Front end)" />
                        <h4>Shopping Demo (front end)</h4>
                    </a>
                </Col>
            </Row>

            <Row>
                {/* Weather Dashboard (Module 6 - APIs, jQuery, Bootstrap) */}
                <Col>
                    <a href='https://anj-23.github.io/weather-dashboard/' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/port_1.jpg")} className="portfolio-image" alt="Weather Dashboard" />
                        <h4>Weather Dashboard</h4>
                    </a>
                </Col>

                {/* Social Network API (Module 18 - Mongoose/MongoDB) */}
                <Col>
                    <a href='https://github.com/ANJ-23/social-network-api' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/port_2.jpg")} className="portfolio-image" alt="Social Network API" />
                        <h4>Social Network API</h4>
                    </a>
                </Col>

                {/* Password Generator (Module 3 - Front-end JavaScript) */}
                <Col>
                    <a href='https://anj-23.github.io/password-generator/' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/port_3.jpg")} className="portfolio-image" alt="Password Generator" />
                        <h4>Password Generator</h4>
                    </a>
                </Col>
            </Row>

            <Row>
                {/* E-Commerce Tracker (Module 13 - MySQL, Express.js, Sequelize ) */}
                <Col>
                    <a href='https://github.com/ANJ-23/e-commerce-tracker' target='_blank' rel="noreferrer" >
                        <Image src={require("../assets/images/port_4.jpg")} className="portfolio-image" alt="E-Commerce Tracker" />
                        <h4>E-Commerce Tracker</h4>
                    </a>
                </Col>

                {/* README Generator (Module 9 - Node.js, Back-end JavaScript) */}
                <Col>
                    <a href='https://anj-23.github.io/password-generator/' target='_blank' rel="noreferrer">
                        <Image src={require("../assets/images/port_5.jpg")} className="portfolio-image" alt="README Generator" />
                        <h4>README Generator</h4>
                    </a>
                </Col>

                {/* Web API Quiz (Module 4 - Front-end JavaScript) */}
                <Col>
                    <a href='https://anj-23.github.io/web-api-quiz/'  target='_blank' rel="noreferrer">
                        <Image src={require("../assets/images/port_6.jpg")} className="portfolio-image" alt="Web API Quiz" />
                        <h4>Web API Quiz</h4>
                    </a>
                </Col>
            </Row>
        </Container> 
    )
}

export default Portfolio