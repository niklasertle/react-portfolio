import { useState } from 'react'

function NavTabs({ currentPage, setCurrentPage }) {
  const [showLinks, setShowLinks] = useState(false)

  function handleShowNav () {
    setShowLinks(!showLinks)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <a className="navbar-brand">Nik Ertle</a>
        <div>
          <button className="btn btn-primary" id='toggle-button' onClick={handleShowNav}><i class="fas fa-bars"></i></button>
          <div className="navbar-nav" id={showLinks ? "hidden": ""}>
            <a
              href="#home"
              onClick={() => setCurrentPage("Home")}
              className={
                currentPage === "Home"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setCurrentPage("About")}
              className={
                currentPage === "About"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={() => setCurrentPage("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => setCurrentPage("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              Contact
            </a>
            <a
              href="#resume"
              onClick={() => setCurrentPage("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;