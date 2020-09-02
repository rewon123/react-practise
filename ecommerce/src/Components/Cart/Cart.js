import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h1 style={{fontSize:'30px'}}>{cart.length}</h1>
            {
                props.children
            }
        </div>
    );
};

export default Cart;