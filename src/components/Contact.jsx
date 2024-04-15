import React, { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact(props) {
    const [data, setData] = useState({ 'name': '', 'email': '', 'message': '' })
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const hostname = import.meta.env.VITE_BACKEND_HOSTNAME;
        let res = await fetch(`${hostname}/sendmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        res = await res.json();
        if (res.success)
            toast('Message Sent');
        else
            toast('Internal Server Error, Please Try Again Later!');
        setLoading(false);
    }

    return (
        <div id='contact'>
            <ToastContainer />
            <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
                <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                <h1 className='text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>Contact Me</h1>
                <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
            </div>
            <div className="h-auto w-auto mx-2 sm:w-[70vw] md:px-5 sm:mx-auto mb-20">
                <div className="h-full border-[4px] border-slate-950 bg-white  rounded-lg shadow-md">
                    <div className="flex flex-nowrap items-center gap-2 bg-slate-950 border-y-[4px] border-slate-950 text-white p-4">
                        <GoDotFill className='text-cyan-400 text-lg' />
                        <h1 className='text-lg font-semibold capitalize'>Get In <span className=''>Touch</span></h1>
                    </div>
                    <form action="" className='p-5' onSubmit={handleSubmit}>



                        <input value={data.name} required name="name" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} type="text" placeholder='Full Name' className='border-b-2 border-black bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-semibold text-sm' />


                        <input value={data.email} required name='email' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} type="email" placeholder='@Email' className='border-b-2 border-black bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-semibold text-sm' />


                        <textarea value={data.message} name='message' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} placeholder='Leave a message here...' className='h-[130px] border-b-2 border-black bg-transparent focus:outline-none ps-2 pb-3 mb-5 w-full font-semibold text-sm'>
                        </textarea>


                        <div className="flex flex-nowrap items-center gap-3">
                            <button onClick={handleSubmit} type='submit' className='py-2 px-5 bg-cyan-500 text-white font-semibold text-sm rounded-md'>
                                {loading ? "Sending" : "Send"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}