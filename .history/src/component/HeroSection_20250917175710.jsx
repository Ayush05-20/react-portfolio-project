import { ArrowDown } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
    const renderLetters = (text, extraClasses = '') => {
        return text.split('').map((letter, index) => (
            <span
                key={index}
                className={`inline-block transition-transform duration-300 hover:scale-125 ${extraClasses}`}
            >
                {letter === ' ' ? '\u00A0' : letter}
            </span>
        ));
    };
  return (
    <section id='hero' className='relative min-h-screen flex flex-col justify-center items-center px-4'>
        <div className='text-center container max-w-4xl mx-auto z-10'>
            <div className='space-y-6'>
                <div className='flex justify-center mb-8'>
                    <div className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
                        <img 
                            src="./MyPic.png" 
                            alt="" 
                            className='relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-1 border-background shadow-xl opacity-0 animate-fade-in
                            transition-all duration-300
                            group-hover:transform group-hover:scale-105
                            group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]'
                        />
                    </div>
                </div>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity:0 animate-fade-in'>{renderLetters("Hi, I'm")}</span>
                    <span className='opacity:0 animate-fade-in-delay-1 text-glow'>{renderLetters("Ayush")}</span>
                    <span className='ml-2 opacity:0 animate-fade-in-delay-2 '>{renderLetters("Shrestha", " bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent")}</span>
                </h1>
                <p className='text-lg md:text-xl opacity:0 mx-auto text-muted-foreground max-2-2xl animate-fade-in-delay'>
                    I am a Student. Aspiring AI Engineer. Tech Enthusiast. Lifelong Learner.
                </p>
                <div className='flex sm-:flex-row gap-12 margin:auto pt-4 justify-center'>
                    <a href="#projects" className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20'>
            <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
            <ArrowDown className='h-5 w-5'/>
        </div>
    </section>
  )
}

export default HeroSection