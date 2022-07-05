import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log( data );
        const url = `http://localhost:5000/addproduct`;
        fetch( url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( data )
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                alert( 'Product is Successfully Added!' );
            } );
    };
    return (
        <div>
            <h3 className='text-center my-5'>Add Product</h3>
            <form className='d-flex flex-column w-50 mx-auto mb-5' onSubmit={handleSubmit( onSubmit )}>
                <input placeholder='Product Name..' type='text' className='mb-2' {...register( "name" )} />
                <input placeholder='Price' type='number' className='mb-2' {...register( "price" )} />
                <textarea placeholder='Description...' className='mb-2' type="text" {...register( "description" )} />
                <input type="submit" className='btn btn-primary' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;