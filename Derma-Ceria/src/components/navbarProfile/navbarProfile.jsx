import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaUserCircle } from 'react-icons/fa';
import Logo from "../../assets/logos/logoHorizontal.png";
import styles from "../navbarProfile/navbarProfile.module.css";
import "../../index.css";

const NavbarProfile = ({ setIsLoggedIn }) => {
  const [userType, setUserType] = useState("donor");

  return (
    <Navbar className={styles.navbar}>
      <Container fluid className={styles.container}>
        <Navbar.Brand as="a" href="/" className={styles.navbarBrand}>
          <img src={Logo} alt="logo" width="150px" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "400px" }}
            />
          </form>
          <Nav className="ms-auto">
            <Nav.Link href="/donasi" className={`${styles.navLink} text-white me-4`}>
              Donasi
            </Nav.Link>
            <Nav.Link href="/event" className={`${styles.navLink} text-white me-4`}>
              Event
            </Nav.Link>
            <Nav.Link href="/blog" className={`${styles.navLink} text-white me-4`}>
              Blog
            </Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle
              as={Navbar.Text}
              className={styles.profileIcon}
            >
              <FaUserCircle size={30} color="white" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className={styles.dropdownMenu}>
              <Dropdown.Item href="/" className={styles.dropdownItem}>
                Homepage
              </Dropdown.Item>
              <Dropdown.Item
                href={userType === "donor" ? "/dashboardDonatur" : "/dashboardBenefisari"}
                className={styles.dropdownItem}
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item href="/" className={styles.dropdownItem}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarProfile;
