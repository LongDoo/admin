import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, } from 'reactstrap';
import { Link } from 'gatsby'

export default class LongdooNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Longdoo</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem className="ml-5">
                  <Link to="/new">Add post</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}