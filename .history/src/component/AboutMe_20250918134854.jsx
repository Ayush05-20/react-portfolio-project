import { Brain, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='py-20 px-3 relative overflow-hidden'>
        {/* Decorative, glowing orbs that float and pulse subtly */}
        <div className='absolute -top-16 -left-16 w-56 h-56 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-slow-float' />
        <div className='absolute -bottom-16 -right-16 w-56 h-56 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-slow-float' />

        <div className='container max-w-6xl mx-auto relative z-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in'>
                <span className='text-glow'>About</span><span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent ' >Me</span>
            </h2>

            <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
                
                {/* Text and Contact Button Section */}
                <div className='lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in-delay-1'>
                    <h3 className='text-2xl font-semibold'>
                         
                    </h3>
                    <p className='text-muted-foreground max-w-lg lg:max-w-none mx-auto leading-relaxed'>
                        I am a dedicated and passionate student with a strong interest in web development, artificial intelligence, and machine learning. I love exploring new technologies and continuously learning to enhance my skills. My goal is to leverage my knowledge to create innovative solutions that can make a positive impact in the tech world.
                    </p>

                    <div className='flex justify-center lg:justify-start pt-4'>
                        <a href="#contact" className='cosmic-button-light'>
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Skills Section - Transparent, Layered Design */}
                <div className='lg:w-1/2 flex flex-col items-center lg:items-start gap-8 mt-8 lg:mt-0'>
                    
                    {/* Skill 1 - Web Development */}
                    <div className='w-full relative px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03] lg:self-start lg:w-[90%] cosmic-card animate-fade-in-delay-2'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-primary/10 animate-blue-pulse'>
                                <Code className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4>
                                    Web Development
                                </h4>
                                <p className='text-muted-foreground text-sm'>
                                    Proficient in building responsive and dynamic websites using modern web technologies like React, JavaScript, HTML, and CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Skill 2 - Problem-Solving */}
                    <div className='w-full relative px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03] lg:self-end lg:w-[90%] cosmic-card animate-fade-in-delay-3'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-primary/10 animate-blue-pulse'>
                                <User className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4>
                                    Problem-Solving
                                </h4>
                                <p className='text-muted-foreground text-sm'>
                                    Applying creative thinking to tackle complex challenges and build user-centric solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skill 3 - AI & Machine Learning */}
                    <div className='w-full relative px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03] lg:self-start lg:w-[90%] cosmic-card animate-fade-in-delay-4'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-primary/10 animate-blue-pulse'>
                                <Brain className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4>
                                    AI & Machine Learning
                                </h4>
                                <p className='text-muted-foreground text-sm'>
                                    Enthusiastic about AI and machine learning, with hands-on experience in Python and popular libraries like Numpy, Pandas, MatPlotlib, PyTorch.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe