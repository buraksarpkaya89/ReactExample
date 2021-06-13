import React, { Component } from 'react';
import {Link} from "react-router-dom"


import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';

class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Sepetiniz - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id}>
                                    <Badge status="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                                    {cartItem.product.productName}
                                    <Badge color="dark">{cartItem.quantity}</Badge>
                                </DropdownItem>
                            ))
                        }


                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="cart">Sepetime Git</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default CartSummary;