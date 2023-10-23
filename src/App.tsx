import React, { createElement as e, useState } from 'react'
import { Product } from './components/Product'
import { products } from './data/products'
import { IProduct } from './models'

function App() {
    // const productsMarkup: void[] = products.map((product) => {
    //     <Product key={product.id} product={product} />
    // })
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {/* {productsMarkup()} */}
            <Product key={1} product={products[0]} />
            <Product key={2} product={products[1]} />

        </div>
    )
}

export default App
