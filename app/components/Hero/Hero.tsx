import React from 'react'
import Campaign from './Campaign'
import Header from './Header/Header'
import Content from './Content/Content'

function Hero() {
  return (
    <div className='pt-10 pb-12 px-8 max-w-[1100px] mx-auto'>
      <Campaign />
      <Header />
      <Content />
    </div>
  )
}

export default Hero
