import frame from '../../assets/image/Frame.svg'                         
const Header = () => {
    return (
        <div>
            {/* Nav Bar Start */}
            <div className='flex flex-col justify-center'>
                <div className='flex justify-between my-8 items-center'>
                    <div>
                        <h1 className='text-[#150B2B] lg:text-3xl font-bold cursor-pointer' ><span className='text-[#F8C471]'>GOT</span> Recipe </h1>
                    </div>
                    <div className='hidden gap-2 md:flex justify-center lg:gap-7  text-wrap'>
                        <h1 className='cursor-pointer'>Home</h1>
                        <h1 className='cursor-pointer'>Recipes</h1>
                        <h1 className='cursor-pointer'>About</h1>
                        <h1 className='cursor-pointer'>Search</h1>
                    </div>
                    <div className=' flex gap-3'>
                        <input type="text"  placeholder="Search..." className=' rounded-[50px] bg-gray-100 p-3'/>
                        <img className='bg' src={frame}></img>

                    </div>
                </div>
            </div>
            {/* Nav Bar Close */}
            {/* Banner Start */}
            <div className='flex flex-col justify-center bg-banner text-center items-center text-white rounded-3xl mb-[100px]'>
                <div className='w-[80%] space-y-8'>
                    <p className=' text-5xl font-bold '>Discover an exceptional cooking class tailored for you!</p>
                    <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                </div>
                <div className='flex justify-center gap-14 mt-10  '>
                <button className=" bg-[#0BE58A] rounded-[50px] text-xl text-black p-5 ">Explore Now</button>
                <button className="glass rounded-[50px] text-white text-xl p-5">Our Feedback</button>
                </div>
            </div>

            {/* Banner Close */}

        </div>
    );
};

export default Header;