import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
    <Navbar color='light' expand='lg' light>
      <NavbarBrand href="/">
        <h2 className="text-center">SHOE GENG</h2>
      </NavbarBrand>
      </Navbar>
    <Navbar color='light' expand='lg' light>
      
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse className="w-100" isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/categories">
              Categories
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/men">
              Men
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/women">
              Women
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/kids">
              Kids
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
      </>
  );
};

export default Header;
