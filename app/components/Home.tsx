import React from 'react'

import Nav from './Navigation/Nav'
import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import LatestUpdates from './LatestUpdates/LatestUpdates'
import Safety from './Safety/Safety'
import Research from './Research/Research'
import Products from './Products/Products'

const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <Intro/>
      <LatestUpdates/>
      <Safety/>
      <Research/>
      <Products/>
    </>
  )
}

export default Home