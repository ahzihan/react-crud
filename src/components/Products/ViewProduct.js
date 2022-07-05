import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:5000/allproduct' )
            .then( res => res.json() )
            .then( data => setProducts( data ) );
    }, [] );


    const handleDelete = id => {
        const proceed = window.confirm( 'Are you sure?' );
        if ( proceed ) {
            const url = `http://localhost:5000/allproduct/${ id }`;
            fetch( url, {
                method: "DELETE"
            } )
                .then( res => res.json() )
                .then( data => {
                    console.log( data );
                    const remaining = products.filter( product => product._id !== id );
                    setProducts( remaining );
                } );
        }
    };
    return (
        <div>
            <h2 className='my-4 text-center'>All Products: {products.length}</h2>
            {
                products.map( product => <div className='mb-3 card w-25 mx-auto'>
                    <div key={product._id} className='p-3 text-center'>
                        <h4>Name: {product.name}</h4>
                        <h5>Price: {product.price} Tk/kg</h5>
                        <p>{product.description}</p>
                    </div>
                    <div className='d-flex mx-auto mb-2'>
                        <Link to={`/update/${ product._id }`}><button>Update</button></Link>
                        <button onClick={() => handleDelete( product._id )} className='btn btn-danger'>Delete</button>
                    </div>
                </div> )
            }
        </div>
    );
};

export default ViewProduct;