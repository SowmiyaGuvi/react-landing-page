import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#!">React Landing Page</a>
          <a className="btn btn-primary" href="#signup">Sign Up</a>
        </div>
      </nav>
  );
}

export default NavBar;