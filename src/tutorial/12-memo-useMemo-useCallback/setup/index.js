import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [Cart, setCart] = useState(0)

  const AddtoCart =useCallback(()=>{
    setCart(Cart+1)
  },[Cart])

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} AddtoCart={AddtoCart}/>
    </>
  )
}

const BigList = React.memo(({ products,AddtoCart }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} AddtoCart={AddtoCart}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields ,AddtoCart}) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={AddtoCart}>Add Cart</button>
    </article>
  )
}
export default Index
