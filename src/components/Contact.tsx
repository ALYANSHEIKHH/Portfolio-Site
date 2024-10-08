import React from 'react'

const Contact = () => {
  return (
    <div>
        <section id="contact" className="bg-gray-50 py-12">
  <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
    <h1 className="text-4xl font-bold text-[#fca61f] text-center mb-6">Contact Us</h1>
    <p className="text-lg text-gray-600 text-center mb-8">We'd love to hear from you! Fill out the form below or reach us through the links provided.</p>
    
    <form action="mailto:alyansheikhh123@gmail.com" method="post" encType="text/plain" className="space-y-6">
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required 
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca61f]"/>
      
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required 
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca61f]"/>
      
      <textarea 
        name="message" 
        rows= {5}
        placeholder="Your Message" 
        required 
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca61f]"></textarea>
      
      <button 
        type="submit" 
        className="w-full bg-[#fca61f] text-white font-semibold py-3 rounded-lg hover:bg-white hover:text-[#fca61f] border-2 border-[#fca61f] transition duration-300">
        Submit
      </button>
    </form>

    <div className="mt-8 text-center">
      <p className="text-lg text-gray-600 mb-4">Or connect with me through:</p>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/alyan-sheikh-1a26262b4/" target="_blank" className="text-[#fca61f] text-xl font-bold hover:underline">LinkedIn</a>
        <a href="https://github.com/ALYANSHEIKHH" target="_blank" className="text-[#fca61f] text-xl font-bold hover:underline">GitHub</a>
        <a href="https://wa.me/+923253508399" target="_blank" className="text-[#fca61f] text-xl font-bold hover:underline">WhatsApp</a>
     {/* <a href="https://instagram.com/yourprofile" target="_blank" className="text-[#fca61f] text-xl font-bold hover:underline">Instagram</a>  */}
      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default Contact
