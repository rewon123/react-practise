import React, { useEffect, useState } from 'react';
import { removeFromDatabaseCart, getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    const tkNai = ()=> {
        alert('amr site akhon o complete hoy nai, kichu pari na');
    }
    return (
        <div>
            <div className='container'>
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
                }
            </div>
            <Cart cart={cart}>
                <button onClick={tkNai}><i id="icon" className="fa fa-shopping-cart fa-2x"></i></button>
            </Cart>
        </div>
    );
};

export default Review;