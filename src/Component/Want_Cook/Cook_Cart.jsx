import Cart from './Cart';
import Preparing from './Preparing';

const Cook_Cart = ({ item, handlePreparing, shift }) => {
    console.log(shift)
    const totalCalories = shift.reduce((value, currentVal) => value + currentVal.calories, 0);
    const totalTime = shift.reduce((valueTime, currentValTime)=> valueTime + currentValTime.preparing_time,0 )
    return (
        <div className=' border-2 shadow-lg border-gray-300 rounded-lg bg-white' >
            <div>
                <div>
                    <h1 className='text-center text-xl font-semibold pt-8 pb-2 '>
                        Want to cook: {item.length}
                    </h1>
                    <div className='border-b-2 border-[#28282826] mx-28'></div>

                        <div>
                            <div className='grid grid-cols-7 gap-5 pl-5 py-5'>
                                <p></p>
                                <p className='col-span-2'>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                                <p ></p>
                            </div>
                        </div>

                </div>
                <div className='bg-gray-200'>
                    {
                        item.map((cart, index) => <Cart key={index} cart={cart} index={index} handlePreparing={handlePreparing} ></Cart>)
                    }
                </div>

            </div>
            <div>
                <div>
                    <h1 className='text-center text-xl font-semibold pt-8 pb-2'>
                        Currently cooking: {shift.length}
                    </h1>
                    <div className='border-b-2 border-[#28282826] mx-28 '></div>
                    <div>
                        <div className='grid grid-cols-7 gap-5 pl-5 py-5 pr-2c'>
                            <p></p>
                            <p className=' col-span-2'>Name</p>
                            <p className=' col-span-2'>Time</p>
                            <p className=' col-span-2'>Calories</p>
                        </div>

                    </div>
                    <div className='bg-gray-200'>
                        {
                            shift.length > 0 && shift.map((item, index) => <Preparing key={index} item={item} index={index}></Preparing>)
                        }
                    </div>
                    <div>
                        <div className='grid grid-cols-7 gap-5 pl-5 my-5 pr-2'>
                            <p></p>
                            <p className=' col-span-2'></p>
                            <p className=' col-span-2'>Total Time = {totalTime} minutes </p>
                            <p className=' col-span-2'>Total Calories = {totalCalories} calories</p>
                        </div>

                    </div>
                </div>


            </div>
            <div>

            </div>
        </div>
    );
};


export default Cook_Cart;
