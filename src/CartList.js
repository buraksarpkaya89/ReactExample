import React, { Component } from 'react';
import { Table, Button } from "reactstrap"

class CartList extends Component {
    renderCart() {
        return (

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Ürün Adı</th>
                        <th>Birim Fiyatı</th>
                        <th>Stok Miktarı</th>
                        <th>Miktar</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartitem => (
                            <tr key={cartitem.product.id}>
                                <td>{cartitem.product.id}</td>
                                <td>{cartitem.product.categoryId}</td>
                                <td>{cartitem.product.productName}</td>
                                <td>{cartitem.product.unitPrice}</td>
                                <td>{cartitem.product.unitsInStock}</td>
                                <td>{cartitem.quantity}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.props.removeFromCart(cartitem.product)}>
                                        Sepetten Çıkar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )


    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }
}

export default CartList;