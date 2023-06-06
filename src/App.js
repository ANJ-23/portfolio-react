import './App.css';
// import non-booststrap styling

import {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import {Home, About, Portfolio, Contact, Resume} from "./pages"
import {Navigation, Header, Footer} from "./components"

/* import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio" */

/* 
TO-DO:
- set body size
- implement light & dark mode switch
*/

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  // console.log(typeof currentPage);

  

  return (
    <div className="App" style={{height:"400"}}>
      {/* <nav style={{ borderBottom: "2px solid black", display: "flex" }}>
        <a onClick={()=>setCurrentPage("home")}>Home</a>
        <a onClick={()=>setCurrentPage("about")}>About</a>
        <a onClick={()=>setCurrentPage("portfolio")}>Portfolio</a>
      </nav> */}

      {/* Nav bar; clicking on the links "sets the current page" & changes page accordingly */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page changes depending on what the user "set the page as" */}
      {currentPage === "home" && (
        <main>
          <Header headerText="HOME">

          </Header>
          <Home>
          
          </Home>
        </main>
      )}

      {currentPage === "about" && (
        <main>
          <Header headerText="ABOUT">

          </Header>
          <About>
          
          </About>
        </main>
      )}

      {currentPage === "portfolio" && (
        <main>
          <Header headerText="PORTFOLIO">

          </Header>
          <Portfolio>

          </Portfolio>
        </main>
      )}

      {currentPage === "resume" && (
        <main>
          <Header headerText="RESUME">

          </Header>
          <Resume>

          </Resume>
        </main>
      )}

      {/* WILL IMPLEMENT LATER */}
      {currentPage === "contact" && (
        <main>
          <Header headerText="CONTACT">

          </Header>
          <Contact>

          </Contact>
        </main>
      )}

      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
