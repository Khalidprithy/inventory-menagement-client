import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <Navbar className='header' collapseOnSelect expand="md" bg="light" variant="dark">
            <Container>
                <NavLink className='brand-name' to="/"> <img className='main-logo' src="https://i.postimg.cc/8PHG7NFk/M-M-logos-transparent.png" alt="" /></NavLink>
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
                        {
                            user ?
                                <button
                                    onClick={handleSignOut}
                                    className='btn btn-link link'>Sign Out</button>
                                :
                                <NavLink className='link' to="/login">Login</NavLink>
                        }
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;