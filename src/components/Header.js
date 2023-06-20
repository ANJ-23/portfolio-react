
// generates Header image
function Header(props) {
    return (
        <header className="header-container">
            <img className='header-image'
                src={require("../assets/images/home_top_image.jpg")}
                alt="Semi-Abstract Space Travel"
            />
            <h1 className="image-text">{props.headerText}</h1>
            
        </header>
        
    )
}

export default Header