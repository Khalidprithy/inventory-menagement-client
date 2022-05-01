import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='header' collapseOnSelect expand="md" bg="light" variant="dark">
            <Container>
                <NavLink className='brand-name' to="/dashboard"> <img className='main-logo' src="https://i.postimg.cc/8PHG7NFk/M-M-logos-transparent.png" alt="" /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex'>
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to="/dashboard">Dashboard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to="/products">Products</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to="/overview">Overview</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to="/shopping">Shopping</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to="/about">About</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className='link' to="/login">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;