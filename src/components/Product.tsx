import { useState } from 'react'
import { IProduct } from '../models'
interface ProductProps {
    key: number
    product: IProduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
    const btnClasses = ['py-2 px-4 border rounded', btnClassName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <p className="font-bold"> {product.price}</p>
            <button
                onClick={() => setDetails(!details)}
                className={btnClasses.join(' ')}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && (
                <div className="">
                    <p>{product.description}</p>
                </div>
            )}
        </div>
    )
}
