import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="text-center text-white items-center bg-[#3f4447] py-14 flex flex-col justify-center ">
                <div>
                    <h3 className="text-4xl font-black"> <span className='text-[#F8C471]'>GOT</span> Recipe</h3>
                </div>
                <p className="mt-4 lg:mt-6 md:mx-20 lg:mx-60">Thank you for being part of our community. Let's Discuss,
                    learn, and grow together!</p>
                    <hr />
                <div className="flex justify-center gap-5 my-5">
                    <div><i className="fa-brands fa-twitter"></i></div>
                    <div><i className="fa-brands fa-facebook"></i></div>
                    <div><i className="fa-brands fa-instagram"></i></div>
                    <div><i className="fa-brands fa-github"></i></div>
                </div>
                <p className="mt-10 text-sm text-gray-400">2017, All Rights Reserved.</p>
            </div>
        </div >
    );
};

export default Footer;