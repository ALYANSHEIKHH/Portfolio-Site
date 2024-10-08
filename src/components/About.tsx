import Image from 'next/image'
import React from 'react'

const About = () => {
  return <div>
       <section id="about" className="about-section bg-gray-50 py-12">
  <div className="container mx-auto text-center px-4">
    <h1 className="text-4xl font-bold mb-6 text-gray-800" data-aos="fade-right" data-aos-duration="1500">
      About Us
    </h1>
    <p className="text-lg text-gray-600 mb-4" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
      I am Alyan, a passionate and experienced Frontend Developer. Over the last year, I have had the opportunity to work on a variety of web development projects, each time honing my skills and pushing boundaries. 
      I specialize in creating fast, responsive, and visually appealing websites. 
    </p>
    <p className="text-lg text-gray-600 mb-8" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">
    Undergraduate in computer science and  pursuing study in Artificial Intelligence web3.0 Mataverse.    </p>

    <div className="team-section">
      <h2 className="text-2xl font-semibold text-[#fca61f] mb-6" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
        Meet the Developer
      </h2>
      <div className="flex justify-center">
        <div className="team-card text-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800">
          <Image width={200} height={200} src="main.png" alt="Alyan - Developer" className="w-36 h-36 rounded-full mx-auto shadow-lg mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">Alyan</h3>
           <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>



      
    </div>
  
}

export default About
