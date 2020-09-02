import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
// styles for  the button
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #ebba34, #FF8E53 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '40px',
    padding: '5px',
  },
});
const Product = (props) => {
  const { img, price, category, name, key } = props.product;
  const className = useStyles();
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full cards">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" style={{ width: '250px', height: '200px' }} src={img} />
      </a>
      <div className="mt-4">
        <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{textDecoration:'none'}}> <NavLink to={"/productDetails/" + key}>{name}</NavLink></h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{category}</h2>
        <p className="mt-1">${price}</p>
       {props.showAddToCart ===true && <Button onClick= { props.handleAddProduct.bind(this,props.product)} className={className.root}>add to cart</Button>}
      </div>
    </div>
  );
};

export default Product;