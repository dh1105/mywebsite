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
            <Navbar dark expand="md" fixed="top" style={{minHeight: "65px"}}>
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    {/* <NavbarBrand className="mr-auto" href="/"></NavbarBrand> */}
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span style={{fontFamily: "Raleway"}}>HOME</span></NavLink>
                            </NavItem>
                            {/* <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/about'><span style={{fontFamily: "Raleway"}}>ABOUT</span></NavLink>
                            </NavItem> */}
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/resume'><span style={{fontFamily: "Raleway"}}>RESUME</span></NavLink>
                            </NavItem>
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/projects'><span style={{fontFamily: "Raleway"}}>PROJECTS</span></NavLink>
                            </NavItem>
                            <NavItem style={{ marginLeft: '10px' }}>
                                <NavLink className="nav-link" to='/contact'><span style={{fontFamily: "Raleway"}}>CONTACT</span></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }

}

export default Header;