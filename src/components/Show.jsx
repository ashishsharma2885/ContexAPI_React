import React, {useEffect, useState} from "react"
import axios from '../utils/axios';
const Show = () => {
    const [products, setproducts] = useState([])

  const getproduct = () => {
  axios.get("/products")
  .then(product => {
   // console.log(product)
    setproducts(product.data)
  })
  .catch(err=>console.log(err))
  }

  useEffect(()=> {
    getproduct()
  }, [])

  return (
    <>
     <button 
    onClick={getproduct} 
    className='rounded px-5 py-2 bg-red-300'
    >
      Call Product API
    </button>
    <hr />
    <ul>
   {products.length > 0 ? (
    products.map((p) => (
    <li key={p.id} className='rounded mb-2 p-5 bg-red-200'>
     {p.title}
    </li> 
    ))
    ): (
    <h1>Loading..</h1>
   )}
   </ul>
   </>
  )
}

export default Show