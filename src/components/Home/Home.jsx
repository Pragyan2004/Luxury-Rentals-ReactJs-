import React from 'react'
import HeroSection from '../../subComponents/HeroSection' // Assuming HeroSection is in the subComponents folder
import TopVillas from '../../subComponents/TopVillas'
import Regions from '../../subComponents/Regions'
import OurSpecialities from '../../subComponents/OurSpecialities'
import Host from '../../subComponents/Host'
import About from '../../subComponents/About'
import SubContact from '../../subComponents/Contact'

function Home() {
  return (
    <>
    <article className='page'>
        <HeroSection/>
        <TopVillas/>
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <SubContact/>
    </article>
    </>
  )
}

export default Home
