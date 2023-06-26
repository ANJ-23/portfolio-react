// (c) Copyright Andrew Joo 2023
// https://github.com/ANJ-23/portfolio-react
// 

import './App.css';

import {useState} from "react"
// import {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import {Home, About, Portfolio, Contact, Resume} from "./pages"
import {Navigation, Header, Footer} from "./components"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  // console.log(typeof currentPage);

  return (
    <div className="App" style={{height:"400"}}>

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

      {/* renders Footer */}
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
