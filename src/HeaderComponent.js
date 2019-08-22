import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarToggler, Collapse, NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <Navbar dark expand="md" fixed="top">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    {/* <NavbarBrand className="mr-auto" href="/"></NavbarBrand> */}
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/about'>About</NavLink>
                            </NavItem>
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/resume'>Resume</NavLink>
                            </NavItem>
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/projects'>Projects</NavLink>
                            </NavItem>
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }

}

export default Header;