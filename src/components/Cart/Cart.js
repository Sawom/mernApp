import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='textStyle cart'>
            <br /> <br />
            <h5 className='text-primary'>Order Summary</h5>
                    <p >Selected Items: {quantity}</p>
                    <p >Total price: {total} Taka</p>
                    <p >Total Shipping: {shipping} Taka</p>
                    <p >Tax: {tax} Taka</p>
                    <p >Grand Total: {grandTotal.toFixed(2)} Taka</p>
                     <Link as={Link} to='/inventory'>
                        <Button size="sm" className='btnclr'> Confirm Order </Button> 
                    </Link>
            <br />
        </div>
    );
};

export default Cart;