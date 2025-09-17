import { Instagram, Mail, MailIcon, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { SiGmail, SiLinkedin } from 'react-icons/si'
import { cn } from '../lib/utils'

const Contacts = () => {
    
  return (
    <section className='py-24 px-4 relative' id="contact">
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-center'>
                <span className='text-glow'>Get I</span>
                <span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>n Touch</span>
            </h2>
            <p className='text-center text-muted-foreground mt-4 max-w-2xl mx-auto'>
                I'm always open to discussing new opportunities, collaborations, or just to say hello. <br></br>
                Feel free to reach out to me through any of the platforms below.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>
                        Contact Me
                    </h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <SiGmail className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='font-medium'>
                                <h4>
                                    Email
                                </h4>
                                <a href="mailto:ayush0kd@gmail.com" className='text-muted-foreground hover:text-sky-400 transition-colors ml-2'>
                                        ayush0kd@gmail.com
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='font-medium'>
                                <h4>
                                    Phone Number
                                </h4>
                                <a href="tel:+9779812345678" className='text-muted-foreground hover:text-sky-400 transition-colors ml-2'>
                                        +977 9812345678
                                </a> 
                            </div>
                        </div>
                    </div>
                
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='font-medium'>
                                <h4>
                                    Location
                                </h4>
                                <a  className='text-muted-foreground hover:text-sky-400 transition-colors ml-2'>
                                        Kathmandu, Nepal
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>
                            Connect With Me
                        </h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="https://www.linkedin.com/in/ayush-shrestha-np/">
                                <SiLinkedin className='h-6 w-6 text-muted-foreground hover:text-sky-400 transition-colors' target=''/>
                            </a>
                            <a href="">
                                <Instagram className='h-6 w-6 text-muted-foreground hover:text-sky-400 transition-colors'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-card p-8  rounded-lg shadow-xs '>
                    <h3 className='text-2xl font-semibold mb-6'>
                        Send Message
                    </h3>
                    <form action="" className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                            <input type="text" id='name' name='name' placeholder='Your Name' required 
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                            <input type="email" id='email' name='email' placeholder='name@gmail.com' required 
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message </label>
                            <textarea id='message' name='message' placeholder='Message' required 
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'/>
                        </div>
                        <button type='submit' className={cn('cosmic-button w-full justify-center flex items-center gap-2')}>
                            <Send size={16}/> Send Message 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts
