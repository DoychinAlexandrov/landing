import React from 'react'

import Nav from './Navigation/Nav'
import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import LatestUpdates from './LatestUpdates/LatestUpdates'

const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <Intro/>
      <LatestUpdates/>
    </>
  )
}

export default Home