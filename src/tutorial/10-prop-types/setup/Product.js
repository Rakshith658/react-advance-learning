import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image,name,price}) => {
  const url = image && image.url
  return <article className='product'>
    <img src={url || defaultImage} alt={name}/>
    <h3>{name}</h3>
    <p>{price || 3.55}</p>
  </article>;
};
Product.propTypes={
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  image:PropTypes.object.isRequired
}
// Product.defaultProp={
//   name:"Default Name",
//   price:3.99,
//   image:defaultImage
// }

export default Product;
