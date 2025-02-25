import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/ociologo.webp';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export const NavBar = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegar = useNavigate();
  const desloguear = (e) => {
    //borrar del sesion storage
    sessionStorage.removeItem('usuario');
    //borrar del state
    setUsuarioLogueado({});
    navegar('/');
  }
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#2c2c54' }}>
      <Container>
        {/* Logo alineado a la izquierda */}
        <Navbar.Brand as={Link} to={'/'}>
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-top rounded-circle"
          />
        </Navbar.Brand>

        {/* Toggle para menú en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Elementos del menú alineados a la derecha */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
           
            {
              usuarioLogueado.uid ? (
                <>
                <NavLink end className="btn btn-danger nav-item nav-link" to={'/admin'}>Administrador</NavLink>
                <button className='btn btn-dark ms-2' onClick={desloguear}>Salir </button>
                </>
              ) :  <NavLink end className="btn btn-danger nav-item nav-link" to={'/login'}>Iniciar Sesión</NavLink>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
