import React from 'react'
import HeroSection from '../components/HeroSection'
import NewestPiecesSection from '../components/NewestPiecesSection'
import About from '../components/About'
import ShopbyArtist from '../components/ShopbyArtist'


const HomePage = () => {
  return (
    <>
    <div id='home'>
    <HeroSection />
    <NewestPiecesSection />
    <ShopbyArtist />
    <About />
    </div>
    </>
  )
}

export default HomePage
