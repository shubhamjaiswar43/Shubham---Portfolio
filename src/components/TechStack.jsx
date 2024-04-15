import React from 'react';

// SKILLS
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss,  SiExpress, SiMongodb,  SiPostman,  SiSocketdotio,SiMysql,SiPostgresql } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";



export default function TechStack() {
    return (
        <div id='skills'>
            <div className="px-6 sm:px-10 md:px-16  pb-10 ">
                <div className="mb-5 flex flex-nowrap items-center gap-3">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className=' text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>Skills</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                    <div className="card h-full card border-2 hover:border-dotted border-spacing-2 border-white hover:border-black rounded-lg ">
                        <div className="h-full border-2 border-black hover:bg-blue-100 rounded-lg hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all   px-5 py-3">
                            <div className="my-3 md:my-5">
                                <h1 className='text-md font-semibold' >Frontend</h1>
                            </div>
                            <div className="mb-3 md:mb-5 flex flex-wrap gap-2">
                                {/* FRONT_END */}
                                <span><button className='flex flex-nowrap items-center gap-1 bg-red-500 p-2 text-white rounded-md' ><FaHtml5 /> <h1 className='text-sm font-semibold'>HTML</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-blue-500 p-2 text-white rounded-md' ><FaCss3Alt /> <h1 className='text-sm font-semibold'>CSS</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-yellow-400 p-2 text-white rounded-md' ><TbBrandJavascript className='text-lg' /> <h1 className='text-sm font-semibold'>Javascript</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-purple-600 p-2 text-white rounded-md' ><FaBootstrap className='text-lg' /> <h1 className='text-sm font-semibold'>Bootstrap</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-sky-400 p-2 text-white rounded-md' ><SiTailwindcss className='text-lg' /> <h1 className='text-sm font-semibold'>Tailwind CSS</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-emerald-600 p-2 text-white rounded-md' ><FaReact className='text-lg' /> <h1 className='text-sm font-semibold'>React JS</h1> </button></span>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full card border-2 hover:border-dotted border-spacing-2 border-white hover:border-black rounded-lg ">
                        <div className="h-full border-2 border-black hover:bg-blue-100 rounded-lg hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all   px-5 py-3">
                            <div className="my-3 md:my-5">
                                <h1 className='text-md font-semibold' >Backend</h1>
                            </div>
                            <div className="mb-3 md:mb-5 flex flex-wrap gap-2">
                                <span><button className='flex flex-nowrap items-center gap-1 bg-yellow-400 p-2 text-white rounded-md' ><FaNodeJs className='text-lg' /> <h1 className='text-sm font-semibold'>Node JS</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-sky-400 p-2 text-white rounded-md' ><SiExpress className='text-lg' /> <h1 className='text-sm font-semibold'>Express JS</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-red-500 p-2 text-white rounded-md' ><SiSocketdotio className='text-lg' /> <h1 className='text-sm font-semibold'>Socket IO</h1> </button></span>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full card border-2 hover:border-dotted border-spacing-2 border-white hover:border-black rounded-lg ">
                        <div className="h-full border-2 border-black hover:bg-blue-100 rounded-lg hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all   px-5 py-3">
                            <div className="my-3 md:my-5">
                                <h1 className='text-md font-semibold' >Database & Other Tools</h1>
                            </div>
                            <div className="mb-3 md:mb-5 flex flex-wrap gap-2">
                                <span><button className='flex flex-nowrap items-center gap-1 bg-emerald-600 p-2 text-white rounded-md' ><SiMongodb className='text-lg' /> <h1 className='text-sm font-semibold'>MongoDB</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-purple-600 p-2 text-white rounded-md' ><SiPostgresql className='text-lg' /> <h1 className='text-sm font-semibold'>Postgresql</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-yellow-400 p-2 text-white rounded-md' ><SiMysql className='text-lg' /> <h1 className='text-sm font-semibold'>MySQL</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-orange-500 p-2 text-white rounded-md' ><SiPostman className='text-lg' /> <h1 className='text-sm font-semibold'>Postman</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-red-500 p-2 text-white rounded-md' ><FaGitAlt className='text-lg' /> <h1 className='text-sm font-semibold'>Git</h1> </button></span>
                                <span><button className='flex flex-nowrap items-center gap-1 bg-blue-500 p-2 text-white rounded-md' ><BiLogoVisualStudio className='text-lg' /> <h1 className='text-sm font-semibold'>Visual Studio</h1> </button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}