import React, { createElement as e, useState } from 'react'
import { Product } from './components/Product'
import { products } from './data/products'
import { IProduct } from './models'

function App() {
    const productsMarkup = products.map((product) => (
        <Product key={product.id} product={product} />
    ))
    return (
        <div className="container mx-auto max-w-2xl pt-5">{productsMarkup}</div>
    )
}

export default App
