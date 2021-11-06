function NavTabs({ currentPage, setCurrentPage }) {
  return (
    <div className="row bg-dark">
      <h3 className="col-8 text-light">{currentPage === "Home" ? "" : "Nik Ertle"}</h3>
      <ul className="col-4 nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => setCurrentPage("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link text-light"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => setCurrentPage("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link text-light"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => setCurrentPage("Portfolio")}
            className={ 
              currentPage === "Portfolio" ? "nav-link active" : "nav-link text-light"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => setCurrentPage("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link text-light"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => setCurrentPage("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link text-light"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;

// TODO: Style Navbar
