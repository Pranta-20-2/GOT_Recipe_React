import React from 'react';

const Cart = ({ cart, index, handlePreparing }) => {
    const { recipe_name, preparing_time, calories } = cart;
    return (
        <div className='grid grid-cols-7 gap-5 mb-5 pl-5 py-2 bg-gray-200'>
            <p >{index + 1}</p>
            <p className=' col-span-2'>{recipe_name}</p>
            <p >{preparing_time} minutes</p>
            <p >{calories} calories</p>
            <p><button onClick={() => handlePreparing(cart)} className="btn bg-[#0BE58A] rounded-[50px]">Preparing</button></p>
        </div>
    );
};

export default Cart;
