import Benefit from '@/component/Benefit'
import Gallery from '@/component/Gallery'
import Hero from '@/component/Hero'
import Survey from '@/component/Survey'
import React from 'react'


const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Benefit />
      <Survey />
      <Gallery />
      
    </div>
  )
}

export default Home