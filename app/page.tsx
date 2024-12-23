import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='bg-floralWhite'>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  )
}

export default page
