import React from 'react';
// ICONS
import { FaCircle, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

// // IMAGE
import shubhamJaiswar from '../assets/shubhamJaiswar.jpg'


export default function About() {

    return (
        <div id='about'>
            <div className="px-0 sm:px-10 md:px-16 pb-10">
                <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className='text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>About Me</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="about p-7 sm:p-10">
                        <h1 className='text-4xl sm:text-5xl font-bold capitalize text-slate-950'>Hey <span className='text-blue-600' >There !</span></h1>
                        <p className='mt-5 mb-2 text-md font-semibold text-slate-500'>
                            Hello, I'm <span className='text-slate-700'>Shubham Jaiswar</span>, a dedicated second-year student pursuing <span className='text-slate-700'>Computer Engineering</span> at D.J. Sanghvi College of Engineering, Mumbai. I am passionate about leveraging technology to create innovative solutions and enhance user experiences. My primary areas of focus include <span className='text-slate-700'>MERN (MongoDB, Express.js, React.js, Node.js) stack development and competitive programming.</span>
                        </p>

                        <h1 className='mt-5 mb-2 text-md font-bold text-slate-900'>Connect With Me.</h1>
                        <div className="flex flex-wrap items-center gap-3">
                            <a href='https://linkedin.com/in/shubhamjaiswar/' target='_blank' className='cursor-pointer  px-8 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-sm rounded-md flex flex-nowrap items-center gap-1' >Linkedin <FaLinkedin className='text-lg' /></a>
                            <a href="https://github.com/shubhamjaiswar43" target="_blank" className='cursor-pointer  px-8 py-3 text-white bg-gradient-to-r from-orange-400 to-orange-600 font-semibold text-sm rounded-md flex flex-nowrap items-center gap-1' >Github <FaGithub className='text-lg' /></a>
                            <a href="mailto:shubhamjaiswar08@gmail.com?subject=Your%20Subject&body=Your%20Message" target="_blank" className='cursor-pointer  px-8 py-3 text-white bg-gradient-to-r from-red-500 to-pink-500 font-semibold text-sm rounded-md flex flex-nowrap items-center gap-1' >Email <MdMarkEmailUnread className='text-lg' /></a>
                        </div>
                    </div>
                    <div className="border-[3px] border-slate-950 rounded-xl mx-5 sm:mx-10 md:m-10 min-h-[400px] sm:max-h-[500px] overflow-hidden relative">
                        <div className="flex flex-nowrap items-center gap-1 text-[13px] border-b-[3px] border-slate-950 p-5 shadow-sm bg-slate-950 rounded-t-lg sticky top-0 left-0 w-full">
                            <FaCircle className='text-blue-500' />
                            <FaCircle className='text-purple-500' />
                            <FaCircle className='text-pink-500' />
                        </div>
                        <img src={shubhamJaiswar} alt="Resume Loading..." />
                    </div>
                </div>
            </div>
        </div>
    )
}