import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function About(props) {

    return (
        <Container className="main-sect">
            <Row>
                <Col lg="4" style={{textAlign:"center", paddingBottom:"20px"}} className='main-left-anim'>
                    <Image src={require("../assets/images/me_2.jpg")} style={{width:"280px"}} alt="Picture of me #2" />
                </Col>
                
                <Col lg={true} className='main-right-anim'>
                    <p>My name is Andrew Joo. In a nutshell, I consume way too much anime, video games, coffee, and sugar. My life blood is either those or homemade bread.</p>
                    <p>Speaking of anime, I have no idea which one's my favorite. If I had to choose, it's between <i>Fate/Stay Night: Unlimited Blade Works</i> and <i>Bakemonogatari</i>. Absolutely great shows for very different reasons. I also loved the first season of <i>Re;Zero</i>. Haven't watched the 2nd season yet, but I'll get to it. Eventually.</p>
                    <p>As for favorite games, <i>Sonic 3 & Knuckles</i>, <i>Doom (1992)</i>, <i>Doom II</i>, and <i>The Elder Scrolls III: Morrowind</i> easily top my list. Also, I've been addicted to VR gaming - especially <i>Beat Saber</i> and <i>Hot Dogs, Horseshoes, and Hand Grenades</i>. LOTS of latent opportunity in VR, lemme tell you.</p>
                    <p>Oh, and I can develop websites - like the one you're visiting now!</p>
                </Col>
            </Row>
        </Container> 
    )
}

export default About