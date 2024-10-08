import About from '@/components/About'
import Contact from '@/components/Contact'
import Fpage from '@/components/Fpage'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <main>
      <Fpage />
      <About />
      <Services/>
      <Projects />
      <Contact  />
    </main>
  )
}

export default page
