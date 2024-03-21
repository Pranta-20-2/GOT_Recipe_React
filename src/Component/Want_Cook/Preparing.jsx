import React from 'react';

const Preparing = ({ item, index }) => {
    const { recipe_name, preparing_time, calories } = item || {};
    return (
        <div className='grid grid-cols-7 gap-5 mb-5 pl-5 py-2 pr-2 '>
            <p>{index+1}</p>
            <p className='col-span-2'>{recipe_name}</p>
            <p className=' col-span-2'>{preparing_time} minutes</p>
            <p className=' col-span-2'>{calories} calories</p>
        </div>
    );
};

export default Preparing;
