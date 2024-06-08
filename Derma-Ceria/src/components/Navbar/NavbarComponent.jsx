import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logos/logoHorizontal.png";
import styles from "./Navbar.module.css";
import "../../index.css";

const NavbarComponent = () => {
  return (
    <>
      <div className="body">
        <Navbar className={styles.navbar}>
          <Container fluid className={styles.container}>
            {/* Logo & Search */}
            <div className="row align-items-center">
              <div className="col">
                <Navbar.Brand href="/">
                  <img src={Logo} alt="logo" style={{ width: "150px" }} />
                </Navbar.Brand>
              </div>
              <div className="col">
                <input type="text" placeholder="Search" className="form-control" style={{ width: "400px" }} />
              </div>
            </div>
            {/* End Logo & Search */}
            <div className="row align-items-center">
              {/* Navbar */}
              <div className="col align-items-center">
                <Nav className="ms-auto d-flex align-items-center">
                  <Nav.Link href="/donasi" className={`${styles.navLink} text-white me-4`}>
                    Donasi
                  </Nav.Link>
                  <Nav.Link href="/event" className={`${styles.navLink} text-white me-4`}>
                    Event
                  </Nav.Link>
                  <Nav.Link href="/blog" className={`${styles.navLink} text-white me-4`}>
                    Blog
                  </Nav.Link>
                  <Nav.Link href="/tentangkami" className={`${styles.navLink} text-white me-4`}>
                    About
                  </Nav.Link>
                </Nav>
              </div>
              {/* End Navbar */}
              {/* Login Button */}
              <div className="col">
                <div className={styles.btnLogin}>
                  <a href="/login" className="btn btn-warning">
                    Login
                  </a>
                </div>
                {/* End Login Button */}
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
