import React from 'react'
import Link from 'next/link'

const Fpage = () => {
  return (
    <div>
        <section className="w-full  h-screen">
  <div className="flex flex-col-reverse md:flex-row items-center justify-evenly h-full">
    
    <div className="md:w-1/2 flex flex-col items-center md:items-start mx-10">
    <h1 className="text-4xl sm:text-6xl md:text-8xl mt-0 font-bold text-dark">
  Hi I'm <br />
  <span className="text-[#fca61f] text-[clamp(2rem,_1rem_+_5vw,_6rem)] font-bold">
    Alyan
  </span>
</h1>

      <p className="mt-4 text-base md:text-xl text-gray-600">A front-end developer focused on modern, responsive web design.</p>
      <div className="mt-8 flex space-x-4">
      <Link href="https://www.linkedin.com/in/alyan-sheikh-1a26262b4/">
          <button
            className="w-[150px] h-[40px] rounded-full bg-[#fca61f] text-white text-lg font-bold transition duration-300 ease-linear hover:bg-white hover:text-[#fca61f] hover:border-2 hover:border-[#fca61f] hover:shadow-lg"
            style={{ boxShadow: '1px 1px 10px #fca61f' }}
          >
            Learn More
          </button>
        </Link>
        <Link href="https://wa.me/+923253508399">
          <button
            className="w-[150px] h-[40px] rounded-full bg-[#fca61f] text-white text-lg font-bold transition duration-300 ease-linear hover:bg-white hover:text-[#fca61f] hover:border-2 hover:border-[#fca61f] hover:shadow-lg"
            style={{ boxShadow: '1px 1px 10px #fca61f' }}
          >
            Contact Me
          </button>
        </Link>
      </div>
    </div>
    
    <div className="md:w-1/2 flex justify-center">
    <img 
  src="main.png" 
  className="w-full sm:w-[300px] md:w-[400px] drop-shadow-[0_0_20px_#fca61f]" 
  alt="Hero Image" 
/>

    </div>
  </div>
</section>

      
    </div>
  )
}

export default Fpage
