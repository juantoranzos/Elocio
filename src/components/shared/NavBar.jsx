import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/ociologo.webp';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = ({ usuarioLogueado, setUsuarioLogueado }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo alineado a la izquierda */}
        <Navbar.Brand as={Link} to={'/'}>
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle para menú en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Elementos del menú alineados a la derecha */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink end className="nav-item nav-link" to={'/'}>Productos</NavLink>
           
            {
              usuarioLogueado.email ? (
                <>
                <NavLink end className="btn btn-danger nav-item nav-link" to={'/admin'}>Administrador</NavLink>
                <button className='btn btn-dark'>Salir </button>
                </>
              ) :  <NavLink end className="btn btn-danger nav-item nav-link" to={'/login'}>Iniciar Sesión</NavLink>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};