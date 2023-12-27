import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from '../store/productsSlice';
import { Link } from 'react-router-dom';

import "./productslist.css";

export const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <p>Products List</p>
            <Link to={`/users`}>
                  <button>List Users</button>
              </Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="card">
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <img className="box" src={product.images[0]} alt="img" />

                    </li>
                ))}
            </ul>
        </div>
    );
};