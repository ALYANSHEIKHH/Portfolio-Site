import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return(
        
        <div>
            <section id="projects" className= "projects-section bg-gray-50 py-12">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-8 text-gray-800" data-aos="fade-right" data-aos-duration="1500">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="text-2xl font-semibold text-[#fca61f] mb-4">E-commerce Website</h2>
        <Image src="P.4.jpeg" alt="Project 1" className="w-full h-40 object-cover rounded-md mb-4"/>
        <p className="text-gray-600 mb-4">This ecommerce store provides business features with mobile-friendly and responsive pages.</p>
        <button className="bg-[#fca61f] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#fca61f] border-2 border-[#fca61f] transition duration-300">
          <a href="https://e-commerce-website-go2o.vercel.app/" target="_blank">View Project</a>
        </button>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
        <h2 className="text-2xl font-semibold text-[#fca61f] mb-4">Shopping Website</h2>
        <Image src="P5.jpeg" alt="Project 2" className="w-full h-40 object-cover rounded-md mb-4"/>
        <p className="text-gray-600 mb-4">This is a shopping website built with Next.js and Tailwind CSS. It is fully responsive.</p>
        <button className="bg-[#fca61f] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#fca61f] border-2 border-[#fca61f] transition duration-300">
          <a href="https://nextjs-website-dusky.vercel.app/" target="_blank">View Project</a>
        </button>
      </div>
    
      <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <h2 className="text-2xl font-semibold text-[#fca61f] mb-4">Travel Agency Design</h2>
        <Image src="P6.jpeg" alt="Project 3" className="w-full h-40 object-cover rounded-md mb-4"/>
        <p className="text-gray-600 mb-4">This is a design for a travel agency website with amazing photographs.</p>
        <button className="bg-[#fca61f] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#fca61f] border-2 border-[#fca61f] transition duration-300">
          <a href="https://travel-two-ebon-88.vercel.app/" target="_blank">View Project</a>
        </button>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Projects