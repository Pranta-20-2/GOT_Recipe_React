import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({handleItem}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    products.map(product => <Product key={product.id} product={product} handleItem={handleItem}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;