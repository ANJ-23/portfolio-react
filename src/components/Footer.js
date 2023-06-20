
// returns icons that link to my socials (GitHub, LinkedIn)
function Footer() {

    return (
        <footer className="footer-container">
            <div>
                <a href="https://github.com/ANJ-23" rel="noreferrer" target="_blank" >
                    <img src={require("../assets/images/github_icon_small_2.png")} alt="Github link"/>
                </a>
                <a href="https://www.linkedin.com/in/andrew-joo-500/" rel="noreferrer" target="_blank" >
                    <img src={require("../assets/images/linkedin_icon_small.png")} alt="LinkedIn link"/>
                </a>
            </div>
        
            <div>
                <p>Copyright @2023 by Andrew Joo</p>
            </div>
        </footer>
    )
}

export default Footer