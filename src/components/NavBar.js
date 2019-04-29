import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Logo from '../images/kings_of_the_road.png';
import shoppingCart from '../images/shoppingCartDark.svg';

import styles from './NavBar.module.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar fixed="top" color="light" light expand="md" className="border-bottom border-primary">
        <NavbarBrand href="/"><img className={`${styles.logo}`} src={Logo} alt=""/></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/shop" className={`${styles.navLink}`}>Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events" className={`${styles.navLink}`}>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tv" className={`${styles.navLink}`}>TV</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className={`${styles.navLink}`}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={`snipcart-checkout ${styles.cart}`}>
                <img src={shoppingCart} height="24px" alt="" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } 
}

export default NavBar;