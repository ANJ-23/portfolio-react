import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function About(props) {

    return (
        <Container className="main-sect">
            <Row>
                <Col sm="3" style={{textAlign:"center"}}>
                    <Image src="./assets/images/cat_2.jpg" style={{width:"220px"}} />
                </Col>
                
                <Col lg={true}>
                    <p>In a nutshell, I consume way too much anime, video games, coffee, and sugar. My life blood is either that or bread & cheese.</p>
                    <p>My favorite anime is...a very hard decision. Personally, it's between <i>Fate/Stay Night: Unlimited Blade Works</i> and <i>Bakemonogatari</i>. Absolutely great shows for very different reasons. I also loved the first season of <i>Re;Zero</i>. Haven't watched the 2nd season yet, but I'll get to it. Eventually.</p>
                    <p>As for favorite games, they are <i>Sonic 3 & Knuckles</i>, <i>Doom (1992)</i>, <i>Doom II</i>, and <i>The Elder Scrolls III: Morrowind</i>. Lately, however, I've been addicted to VR games - especially <i>Beat Saber</i> and <i>Hot Dogs, Horseshoes, and Hand Grenades</i>. LOTS of latent opportunity in VR, lemme tell you.</p>
                    <p>Oh, and I can develop websites - like the one you're visiting now!</p>
                </Col>
            </Row>
        </Container> 
    )

    /* (LIST SKILLS HERE) I'm a guy who is addicted to video games, anime, VTubers, and coffee. */
}

export default About