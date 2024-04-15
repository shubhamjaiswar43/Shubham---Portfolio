import React,{useRef} from 'react'

const Navbar = () => {
    const navList = useRef();
    const handleBurgerClick = ()=>{
        navList.current.classList.toggle('-translate-x-[640px]')
    }
    return (
        <nav className='mt-3 mx-3 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold sticky top-3 z-10'>
            <div onClick={handleBurgerClick} className="cursor-pointer burger absolute top-4 left-4 sm:hidden flex flex-col space-y-1">
                <span className="inline-block line bg-white rounded-lg font-semibold h-1 w-6"></span>
                <span className="inline-block line bg-white rounded-lg font-semibold h-1 w-6"></span>
                <span className="inline-block line bg-white rounded-lg font-semibold h-1 w-6"></span>
            </div>
            <ul ref={navList} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition sm:h-auto -translate-x-[640px] sm:-translate-x-0 flex pt-12  pb-4 flex-col sm:flex-row sm:space-x-6 lg:space-x-8 sm:justify-end text-2xl sm:py-2 px-8'>
                <a href='#home' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-blue-400 rounded-2xl'>Home</a>
                <a href='#about' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-blue-400 rounded-2xl'>About</a>
                <a href='#skills' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-blue-400 rounded-2xl'>Skills</a>
                <a href='#projects' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-blue-400 rounded-2xl'>Projects</a>
                <a href='#contact' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-blue-400 rounded-2xl'>Contact</a>
            </ul>
        </nav>
    )
}

export default Navbar
