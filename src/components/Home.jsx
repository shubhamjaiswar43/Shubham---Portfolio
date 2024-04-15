import React from 'react'
import homeImg from '../assets/homeImg.png'
import Resume from '../assets/Resume.pdf'
const Home = () => {
    return (
        <div id='home'>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-10 md:p-0 pt-10">
                <div className="col md:p-8 lg:p-16 order-2 md:order-1">
                    <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Hello there 👋,</h1>
                    <h1 className='text-3xl sm:text-4xl font-bold sm:font-semibold'>I <span className=''>am </span><span className=''>Shubham Jaiswar.</span></h1>
                    <h1 className='text-sm my-3 font-[500]'> I am an enthusiastic and dedicated individual, eager to utilize my skills and knowledge to create meaningful and impactful projects.</h1>
                    <br />
                    <a href={Resume} download="ShubhamJaiswarResume" className='py-2 px-4 border-2 border-[black] bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold'>Download CV</a>
                </div>
                <div className="col h-[300px] order-1 md:order-2">
                    <img src={homeImg} alt="" className='h-full w-full object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Home
