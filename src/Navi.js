import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom'

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">E-Commerce App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/form1">Kullanıcı Girişi</Link>
                            </NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/form2">Kullanıcı Girişi -2</Link>
                            </NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <CartSummary removeFromCart={props.removeFromCart} cart={props.cart} />
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;
