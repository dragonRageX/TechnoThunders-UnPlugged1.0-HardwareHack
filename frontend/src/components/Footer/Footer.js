
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">
              Techno Thunders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
            target="_blank"
          >
            Techno Thunders
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
