import { Brain, Code, User } from 'lucide-react'
import React from 'react'
import { DiPython } from "react-icons/di";


const AboutMe = () => {
  return (
    <section id='about' className='py-20 px-3 relative'>
        <div className='container max-w-5xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                <span className='text-glow'>About</span><span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent ' >Me</span>
            </h2>

            <div className='grid grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>
                         Passionate Learner & Tech Enthusiast
                    </h3>
                    <p className='text-muted-foreground'>
                        I am a dedicated and passionate student with a strong interest in web development, artificial intelligence, and machine learning. I love exploring new technologies and continuously learning to enhance my skills. My goal is to leverage my knowledge to create innovative solutions that can make a positive impact in the tech world.
                    </p>

                    <div className='flex  sm-:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='gradient-border p-4 card-hover'>
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
                    <div className='gradient-border p-4 card-hover'>
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
                    <div className='gradient-border p-4 card-hover'>
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
    </section>
  )
}

export default AboutMe