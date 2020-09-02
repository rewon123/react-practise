import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, img, key } = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h1> {name} this is review</h1>
            <p> quantity:{quantity} </p>
            <button className='btn btn-primary' onClick={() => props.removeProduct(key)}> remove</button>
        </div>
    );
};

export default ReviewItem;