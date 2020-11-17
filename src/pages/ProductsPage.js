import React, { useState, useEffect } from 'react'

const getProducts = () => {
  return Promise.resolve([
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
  ])
}

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((p) => {
      setProducts(p)
    })
  }, [])

  return (
    <div>
      <h1>Products Page</h1>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}
