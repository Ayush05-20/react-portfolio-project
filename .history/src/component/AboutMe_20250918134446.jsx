import { Brain, Code, User } from 'lucide-react'
import React from 'react'
import { DiPython } from "react-icons/di";


const AboutMe = () => {
  return (
    <section id='about' className='py-20 px-3 relative overflow-hidden'>
        {/* Decorative background element - A subtle, glowing orb */}
        <div className='absolute -top-16 -left-16 w-56 h-56 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-slow-float' />
        <div className='absolute -bottom-16 -right-16 w-56 h-56 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-slow-float' />


        <div className='container max-w-5xl mx-auto relative z-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in'>
                <span className='text-glow'>About</span><span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent ' >Me</span>
            </h2>

            <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
                
                {/* Text and Contact Button Section */}
                <div className='lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in-delay-1'>
                    <h3 className='text-2xl font-semibold'>
                         Passionate Learner & Tech Enthusiast
                    </h3>
                    <p className='text-muted-foreground max-w-lg lg:max-w-none mx-auto'>
                        I am a dedicated and passionate student with a strong interest in web development, artificial intelligence, and machine learning. I love exploring new technologies and continuously learning to enhance my skills. My goal is to leverage my knowledge to create innovative solutions that can make a positive impact in the tech world.
                    </p>

                    <div className='flex justify-center lg:justify-start pt-4'>
                        <a href="#contact" className='cosmic-button'>
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Skills Cards Section - Asymmetrical Layout */}
                <div className='lg:w-1/2 flex flex-col items-center lg:items-end gap-6 animate-fade-in-delay-2'>
                    <div className='w-full'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4>
                                        Web Development
                                    </h4>
                                    <p>
                                        Proficient in building responsive and dynamic websites using modern web technologies like React, JavaScript, HTML, and CSS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full -mt-4 lg:w-[85%] lg:mr-8'>
                         <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4>
                                        Problem-Solving Skills
                                    </h4>
                                    <p>
                                        Applying creative thinking to tackle complex challenges and build user-centric solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full -mt-4 lg:w-[70%]'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Brain className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4>
                                        AI & Machine Learning
                                    </h4>
                                    <p>
                                        Enthusiastic about AI and machine learning, with hands-on experience in Python and popular libraries like Numpy, Pandas, MatPlotlib, PyTorch.
                                    </p>
                                </div>
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