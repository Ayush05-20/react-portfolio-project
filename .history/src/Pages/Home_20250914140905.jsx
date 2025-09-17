import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import StarBackG from '../component/StarBackG'
import NavBar from '../component/NavBar'
import HeroSection from '../component/HeroSection'
import AboutMe from '../component/AboutMe'
import Skills from '../component/Skills'
import Projects from '../component/Projects'
import Contacts from '../component/Contacts'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle></ThemeToggle>
       <StarBackG></StarBackG>
       <NavBar></NavBar>
       
       <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
       </main>
      <Footer></Footer>
    </div>
  )
}

export default Home