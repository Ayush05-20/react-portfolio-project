import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='absolute -bottom-16 -right-16 w-56 h-56 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-slow-float' />
        <p>
            &copy; {new Date().getFullYear()} All rights reserved.
        </p>
    </footer>
  )
}

export default Footer
