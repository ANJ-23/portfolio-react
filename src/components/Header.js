import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

// generates Header image
function Header(props) {
    return (
        <header className="header-container">
            <img className='header-image'
                src="./assets/images/home_top_image.jpg"
                alt="Header Image: Semi-Abstract Space Travel"
            />
            <h1 className="image-text" style={{fontSize:"64px"}}>{props.headerText}</h1>
            
        </header>
        
    )
}

export default Header