import React, { createElement as e, useEffect, useState } from 'react'
import { Product } from './components/Product'
import { IProduct } from './models'
// import { products } from './data/products'

function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const PRODUCTS_URL = 'https://fakestoreapi.com/products'
    const getMovies = () => {
        return fetch(PRODUCTS_URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    }
    useEffect(() => {
        getMovies().then((items) => {
            setProducts(items)
        })
    }, [])

    const productsMarkup = products.map((product) => (
        <Product key={product.id} product={product} />
    ))
    return (
        <div className="container mx-auto max-w-2xl pt-5">{productsMarkup}</div>
    )
}

export default App
